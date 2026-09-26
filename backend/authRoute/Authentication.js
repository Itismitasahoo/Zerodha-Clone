const express = require("express");
const passport = require("passport");

const { UserModel } = require("../model/UserModel");

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new UserModel({
      username,
      email,
    });

    await UserModel.register(newUser, password);

    res.json({
      message: "Signup successful",
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        error: "Email already exists",
      });
    }

    res.status(400).json({
      error: err.message,
    });
  }
});

// Login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).json({
        error: info?.message || "Invalid email or password",
      });
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      res.json({
        message: "Login successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    });
  })(req, res, next);
});

// Check logged-in user
router.get("/me", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({
      loggedIn: true,
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
      },
    });
  }

  res.status(401).json({
    loggedIn: false,
    message: "User is not logged in",
  });
});

// Logout
router.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }

      res.clearCookie("connect.sid");

      res.json({
        message: "Logout successful",
      });
    });
  });
});

module.exports = router;
