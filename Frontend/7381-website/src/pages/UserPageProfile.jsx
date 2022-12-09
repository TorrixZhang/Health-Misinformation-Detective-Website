import React, { Component } from "react";
import Header from "./navigation";

class UserPageProfile extends Component {
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
              <li>Collections</li>
              <li>Posts</li>
              <li className="selected">Profile</li>
              <li>Footprint</li>
            </ul>
          </div>
          
          <div className="content bg">
            <span>Full Name</span>
            <input type="text" value={'Input your full name:'}/>
            <span>Email Address</span>
            <input type="text" value={'Input your email address:'}/>
            <span>Username</span>
            <input type="text" value={'Input your username:'}/>
            <span>Password</span>
            <input type="password"/>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPageProfile;
