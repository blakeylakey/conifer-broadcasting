import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ handler, active, hoverIn, hoverOut }) => {
  // the nav links
  const navLinks = [
    { title: "Support", value: "support" },
    { title: "About", value: "about" }
  ];

  return (
    <nav className="nav-bar-container">
      <h1 className="nav-bar-brand" onClick={() => handler("home")}>
        <Link to="/">Conifer Broadcasting</Link>
      </h1>
      <div className="nav-bar-hamburger">
        <img
          className="nav-bar-hamburger-icon"
          src="./burger.png"
          height="30px"
        />
      </div>

      <ul className="nav-bar-links" onMouseOver={hoverIn} onMouseOut={hoverOut}>
        {navLinks.map(el => {
          const activeLink = el.value === active ? "active" : "";
          return (
            <li
              className={`nav-bar-link ${activeLink}`}
              onClick={() => handler(el.value)}
              key={el.value}
            >
              <Link to={`/${el.value}`}>{el.title}</Link>
            </li>
          );
        })}
        <li className="nav-bar-sign-up">
          <Link to="/sign-up">
            Sign-Up <sup>&beta;</sup>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
