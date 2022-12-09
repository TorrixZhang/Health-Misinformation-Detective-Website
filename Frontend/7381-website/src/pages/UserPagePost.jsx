import React, { Component } from "react";
import Header from "./navigation";

class UserPagePost extends Component {
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
              <li className="selected">Posts</li>
              <li>Profile</li>
              <li>Footprint</li>
            </ul>
          </div>
          <div className="postContent">
            <div className="question">
                Question Title: xxxxxxxxxxxxxxxxxxxxx
                <span className="icon"></span>
                <span className="dot"></span>    
            </div>
            <div className="question">
                Question Title: xxxxxxxxxxxxxxxxxxxxx
                <span className="icon"></span>
                <span className="dot"></span>    
            </div>  
            <div className="question">
                Question Title: xxxxxxxxxxxxxxxxxxxxx
                <span className="icon"></span>
                 
            </div>  
            <div className="question">
                Question Title: xxxxxxxxxxxxxxxxxxxxx
                <span className="icon"></span> 
            </div>
            <div className="question">
                Question Title: xxxxxxxxxxxxxxxxxxxxx
                <span className="icon"></span> 
            </div>                 
          </div>
        </div>
      </div>
    );
  }
}

export default UserPagePost;
