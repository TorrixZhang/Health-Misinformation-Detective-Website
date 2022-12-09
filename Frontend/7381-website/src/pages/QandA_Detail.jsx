import React, { Component } from "react";
import Header from "./navigation";

class QandADetail extends Component {
  render() {
    return (
      <div>
        <div className="QA_navigation">Q and A</div>
        <div className="userInfo">
          <div className="photo"></div>
          <div className="info">
            <span className="name">Mary</span>
            <span className="time">8 hours ago</span>
            <span className="topic">Topic: Beauty</span>
          </div>
          <div className="icon">
            <span></span>
            <p>128</p>
          </div>
        </div>
        <div className="question">
          <h2>Question Title</h2>
          <p>
            contentContent: Balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala.
          </p>
        </div>
        <div className="answer">
        <h2>2 Answers</h2>
          <div className="userInfo">
            <div className="photo"></div>
            <div className="info">
              <span className="name">Kate</span>
              <span className="time">4 hours ago</span>
              <span className="topic">Profession of Beauty</span>
            </div>
          </div>
          <p>contentContent: Balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala.</p>
        </div>
        <div className="answer">
          <div className="userInfo">
            <div className="photo"></div>
            <div className="info">
              <span className="name">Ben</span>
              <span className="time">3 hours ago</span>
              <span className="topic">Profession of Beauty</span>
            </div>
          </div>
          <p>contentContent: Balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala.</p>
        </div>
      </div>
    );
  }
}

export default QandADetail;
