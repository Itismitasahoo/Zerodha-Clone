import React, { useEffect, useState } from "react";

import api from "../Axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const [username, setUsername] = useState("");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get("/me");
        setUsername(response.data.user.username);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    getUser();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleLogout = async () => {
    try {
      await api.post("/logout");

      setShowLogoutConfirm(false);
      setShowLogoutSuccess(true);

      setTimeout(() => {
        window.location.href = process.env.REACT_APP_FRONTEND_URL + "/login";
      }, 1500);
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">
            {username
              ? username.charAt(0).toUpperCase() + username.slice(-1)
              : "U2"}
          </div>

          <p className="username">{username || "User"}</p>
        </div>

        <button
          className="logout-btn"
          onClick={() => setShowLogoutConfirm(true)}
        >
          Logout
        </button>
      </div>

      {showLogoutConfirm && (
        <div className="logout-overlay">
          <div className="logout-popup">
            <div className="logout-warning-icon">!</div>

            <h2>Confirm Logout</h2>

            <p>Are you sure you want to logout?</p>

            <div className="logout-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>

              <button className="confirm-logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
      {showLogoutSuccess && (
        <div className="logout-overlay">
          <div className="logout-popup">
            <div className="logout-success-icon">✓</div>

            <h2>Logout Successful!</h2>

            <p>Redirecting to login...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
