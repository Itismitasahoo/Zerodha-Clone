require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const session = require("express-session");
const passport = require("passport");

const authRouter = require("./authRoute/Authentication");

const { UserModel } = require("./model/UserModel");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.set("trust proxy", 1);

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    credentials: true,
  }),
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 14 * 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(UserModel.createStrategy());

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app.use("/", authRouter);

app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`app started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });
