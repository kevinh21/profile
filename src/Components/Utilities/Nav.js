import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="navWrapper">
      <h1>KEVIN HARGER - React Developer</h1>
      <nav>
        <ul id="nav1">
          <li>
            <Link to="/landingPage"> LandingPage </Link>
          </li>
          <li>
            <Link to="/information"> Information </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
