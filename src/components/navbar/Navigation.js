import React from "react";
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="light-blue darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">Resume</NavLink>
            <NavLink to="/" data-targets="side-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </NavLink>
          </div>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">
                <i class="fas fa-home"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills">
                <i class="fas fa-copy"></i> Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/experiences">
                <i class="fas fa-id-badge"></i> Experiences
              </NavLink>
            </li>
            <li>
              <NavLink to="/educations">
                <i class="fas fa-graduation-cap"></i> Education
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/portfolios">
                <i class="fas fa-address-card"></i> Portfolios
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="side-nav">
        <li>
          <NavLink to="/">
            <i class="fas fa-home"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills">
            <i class="fas fa-copy"></i> Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/experiences">
            <i class="fas fa-badge"></i> Experiences
          </NavLink>
        </li>
        <li>
          <NavLink to="/educations">
            <i class="fas fa-graduation-cap"></i> Education
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/portfolios">
            <i class="fas fa-address-card"></i> Portfolios
          </NavLink>
        </li> */}
      </ul>
    </>
  );
}
export default Navigation;
