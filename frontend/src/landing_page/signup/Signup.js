import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../Axios";
import "../Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/signup", {
        username,
        email,
        password,
      });

      alert(response.data.message);

      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-header">
          <div className="signup-logo">Z</div>

          <h1>Create your account</h1>

          <p>Start your journey with Zerodha</p>
        </div>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account?
          <Link to="/login">Login</Link>
        </p>

        <p className="terms">
          By signing up, you agree to our Terms & Conditions
        </p>
      </div>
    </div>
  );
}

export default Signup;
