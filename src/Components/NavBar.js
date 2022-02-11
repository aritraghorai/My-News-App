import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    let { mode, changeMode } = this.props;
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${
            mode === "dark" ? "dark" : "light"
          } bg-${mode === "dark" ? "dark" : "light"} text-light`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              My News
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" aria-current="page" to="/">
                    General
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
              <ul>
                <div
                  className={`form-check form-switch text-${
                    mode === "dark" ? "light" : "dark"
                  }`}
                >
                  <label className="form-check-label" htmlFor="lightSwitch">
                    {mode === "dark" ? "Dark Mode" : "light Mode"}
                  </label>
                  <input
                    onClick={changeMode}
                    className="form-check-input"
                    type="checkbox"
                    id="lightSwitch"
                  />
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
