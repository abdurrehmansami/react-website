import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      // activeClassName="menu_active"
      className="container-fluid nav_bg"
    >
      <div
        // activeClassName="menu_active"
        className="row"
      >
        <div
          // activeClassName="menu_active"
          className="col-10 mx-auto"
        >
          <nav
            // activeClassName="menu_active"

            className="navbar navbar-expand-lg navbar-light bg-light"
          >
            <div
              // activeClassName="menu_active"
              className="container-fluid"
            >
              <NavLink className="navbar-brand" to="/">
                Navbar
              </NavLink>
              <button
                // activeClassName="menu_active"

                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  // activeClassName="menu_active"

                  className="navbar-toggler-icon"
                ></span>
              </button>
              <div
                // activeClassName="menu_active"

                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  // activeClassName="menu_active"

                  className="navbar-nav ms-auto mb-2 mb-lg-0"
                >
                  <li
                    // activeClassName="menu_active"

                    className="nav-item"
                  >
                    <NavLink
                      // activeClassName="menu_active"

                      className="nav-link"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li
                    // activeClassName="menu_active"

                    className="nav-item"
                  >
                    <NavLink
                      // activeClassName="menu_active"

                      className="nav-link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li
                    // activeClassName="menu_active"

                    className="nav-item"
                  >
                    <NavLink
                      // activeClassName="menu_active"

                      className="nav-link"
                      to="/service"
                    >
                      Service
                    </NavLink>
                  </li>
                  <li
                    // activeClassName="menu_active"

                    className="nav-item"
                  >
                    <NavLink
                      // activeClassName="menu_active"

                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
