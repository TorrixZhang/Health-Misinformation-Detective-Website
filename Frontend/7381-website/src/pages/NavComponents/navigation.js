import React from "react";
import { Link } from "react-router-dom";
import logoPic from "../../images/LOGO-H 1.png";

const logoStyle = {
  height: "65px",
};

export default function Header() {
  return (
    <nav id="navigation">
      <div id="logo">
        <Link to="/">
          <img src={logoPic} alt="logo" id="logo-picture" style={logoStyle} />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/article">Article</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
        <li>
          <Link to="/QandA">Q&A</Link>
        </li>
        <li>
          <Link to="/aboutTeam">About Experts</Link>
        </li>
        <li>
          <div className="searchBox">
            <input className="search" type="text" placeholder="search..." />
          </div>
        </li>
      </ul>
      <ul>
        <li id="signup">
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}
