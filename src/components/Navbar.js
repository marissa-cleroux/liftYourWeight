import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper teal darken-4">
        <Link className="brand-logo left" to="/">
          Lift Your Weight
        </Link>

        <button
          data-target="mobile-nav"
          className="sidenav-trigger right btn-flat white-text teal darken-4"
        >
          <i className="material-icons">menu</i>
        </button>

        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/exercises">Exercises</NavLink>
          </li>
        </ul>
      </nav>
      <ul className="sidenav" id="mobile-nav">
        <li>
          <NavLink to="/exercises" className="sidenav-close">
            Exercises
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Navbar);
