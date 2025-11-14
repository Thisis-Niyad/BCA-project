import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const home = location.pathname === "/";
  const contact = location.pathname.startsWith("/contact");

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            logoimg
          </Link>

          {/* Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${home ? "active" : ""}`}
                  to="/"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={() => setIsOpen(false)}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" onClick={() => setIsOpen(false)}>
                  Service
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="registeration" onClick={() => setIsOpen(false)}>
                  Artist register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${contact ? "active" : ""}`}
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Buttons */}
            <div className="d-flex align-items-center mt-2 mt-lg-0">
              <Link className="btn btn-outline-dark px-4 py-2" to="signup">
                Sign Up
              </Link>
              <Link className="btn btn-dark px-4 py-2 mx-1" to="signin">
                LogIn
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
