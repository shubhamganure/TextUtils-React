import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({
  title = "Set Title Here",
  aboutText = "About",
  mode,
  toggleMode,
}) {
  const passToParent = () => {
    toggleMode("data from child");
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {aboutText}
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={passToParent}
              id="switchCheckDefault"
            />
            <label
              className={`form-check-label text-${mode === "dark" ? "light" : "dark"}`}
              htmlFor="switchCheckDefault"
            >
              Enable {mode === "light" ? "Dark" : "Light"} Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
