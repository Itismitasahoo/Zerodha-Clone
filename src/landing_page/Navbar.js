import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-navbar"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            style={{ width: "23%" }}
            alt="logo"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Signup */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>

              {/* About */}
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>

              {/* Product */}
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Product
                </Link>
              </li>

              {/* Pricing */}
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>

              {/* Support */}
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>

              {/* Hamburger Menu */}
              <li className="menu-container" ref={menuRef}>
                <button
                  className="menu-btn"
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                {/* Dropdown */}
                {isMenuOpen && (
                  <div className="hamburger-menu">
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                      Signup
                    </Link>

                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      Login
                    </Link>

                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                      About
                    </Link>

                    <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                      Products
                    </Link>

                    <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>
                      Pricing
                    </Link>

                    <Link to="/support" onClick={() => setIsMenuOpen(false)}>
                      Support
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
