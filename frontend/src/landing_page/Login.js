import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../Axios";
import "./Signup.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      setShowSuccess(true);

      // Redirect after 1.5 seconds
      setTimeout(() => {
        window.location.href = process.env.REACT_APP_DASHBOARD_URL;
      }, 1500);
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-header">
          <div className="signup-logo">Z</div>

          <h1>Login</h1>

          <p>Login to your Zerodha account</p>
        </div>

        <form onSubmit={handleLogin}>
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Login
          </button>
        </form>

        <p className="login-text">
          Don't have an account?
          <Link to="/signup">Signup</Link>
        </p>
      </div>

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-popup">
            <div className="success-icon">✓</div>

            <h2>Login Successful!</h2>

            <p>Redirecting to your dashboard...</p>
          </div>
        </div>
      )}
      {showError && (
        <div className="error-overlay">
          <div className="error-popup">
            <div className="error-icon">✕</div>

            <h2>Authentication Unsuccessful</h2>

            <p>Password or email is incorrect.</p>

            <button onClick={() => setShowError(false)}>Try Again</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
