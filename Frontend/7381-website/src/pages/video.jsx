import React, { Component } from "react";
import ArticleNavgation from "./NavComponents/articleNav";
import {Link} from "react-router-dom";
import ExpertHeader from "./NavComponents/navExpertSign";

class Video extends Component {
  render() {
    return (
      <div>
        <ExpertHeader />
        <ArticleNavgation />
        {/** video content one */}
        <div className="videoContent">
          <div className="left">
            <div className="top"></div>
            <div className="bottom">
              <div className="photo">
                
              </div>
              <div className="text">
                <h5><Link to="/video/detail">The Video Title</Link></h5>
                <span>
                  <p>user's name</p>
                  <p>xx views</p>
                  <p>upload time</p>
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="top"></div>
            <div className="bottom">
              <div className="photo"></div>
              <div className="text">
                <h5>The Video Title</h5>
                <span>
                  <p>user's name</p>
                  <p>xx views</p>
                  <p>upload time</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/** video content two */}
        <div className="videoContent">
          <div className="left">
            <div className="top"></div>
            <div className="bottom">
              <div className="photo"></div>
              <div className="text">
                <h5>The Video Title</h5>
                <span>
                  <p>user's name</p>
                  <p>xx views</p>
                  <p>upload time</p>
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="top"></div>
            <div className="bottom">
              <div className="photo"></div>
              <div className="text">
                <h5>The Video Title</h5>
                <span>
                  <p>user's name</p>
                  <p>xx views</p>
                  <p>upload time</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
