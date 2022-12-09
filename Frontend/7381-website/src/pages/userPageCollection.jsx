import React, { Component } from "react";
import Header from "./navigation";

class UserPageCollection extends Component {
  render() {
    return (
      <div>
        <div className="QA_navigation">导航栏</div>
        <div className="profile">
            <div className="photo"></div>
            <span className="name">Welcome! Emily</span>
            <span className="id">ID: 12345678</span>
        </div>
        <div className="userContent">
            <div className="category">
                <ul>
                    <li className="selected">Collections</li>
                    <li>Posts</li>
                    <li>Profile</li>
                    <li>Footprint</li>
                </ul>
            </div>
            <div className="content">
                 <ul>
                    <li>
                        <div className="pic"></div>
                        <span>Here is the article title</span>
                    </li>
                    <li>
                        <div className="pic"></div>
                        <span>Here is the article title</span>
                    </li>
                    <li>
                        <div className="pic"></div>
                        <span>Here is the article title</span>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <div className="pic"></div>
                        <span>Here is the article title</span>
                    </li>
                    <li>
                        <div className="pic"></div>
                        <span>Here is the article title</span>
                    </li>
                    <li>
                        <div className="pic"></div>
                        <span>Here is the article title</span>
                    </li>
                 </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default UserPageCollection;
