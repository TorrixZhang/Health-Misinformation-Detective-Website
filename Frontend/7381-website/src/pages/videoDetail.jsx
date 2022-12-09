import React, { Component } from "react";
import Header from "./NavComponents/navigation";

class VideoDetail extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="video">
          <div className="photo"></div>
        </div>
        <div className="videoIntro">
          <h3>The Video Title</h3>
          <p>
            The introduction of the video...The introduction of the video... The
            introduction of the video...The introduction of the video... The
            introduction of the video...The introduction of the video... The
            introduction of the video...The introduction of the video...
          </p>
          <div className="topic">
            <span>Health</span>
            <div className="icon">
              <span className="view"></span>100
              <span className="like"></span>78
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
