import React from "react";
import { Link } from "react-router-dom";
import logoPic from "../../images/LOGO-H 1.png";
import userIcon from "../../images/user-icon.png";
import uploadIcon from "../../images/uploadIcon.png";
import Dropdown from "react-bootstrap/Dropdown";

const logoStyle = {
  height: "65px",
};

export default function ExpertHeader() {
  return (
    <nav id="navigation">
      <div>
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
        <li>
          <img src={userIcon} alt="user" style={logoStyle} />
        </li>
        {/* <li>Professional</li> */}
        <li>
          <Dropdown>
            <Dropdown.Toggle>
              <img src={uploadIcon} alt="upload" style={logoStyle} />
            </Dropdown.Toggle>
            <Dropdown.Menu style={dropdownStyle}>
              <Dropdown.Item className="uploadNav">
                <Link to="/article/post">Article</Link>
              </Dropdown.Item>
              <br />
              <Dropdown.Item className="uploadNav">
                <Link to="/video/upload">Video</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
      {/*             <div id='menu'>
                <ul>
                    <li>Upload</li>
                    <li>Article</li>
                    <li>Video</li>
                </ul>
            </div> */}
    </nav>
  );
}

const dropdownStyle = {
  position: "absolute",
  backgroundColor: "#d0e8f2",
  width: "65px",
  margin: "0",
  padding: "10px",
};
