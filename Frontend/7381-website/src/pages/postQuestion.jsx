import React, { Component } from "react";

class PostQuestion extends Component {
  render() {
    return (
      <div>
        <div className="QA_navigation">Post Your Questions Here</div>
        <div className="questionArea">
            <span className="title">Title:</span>
            <input type="text" className="iptTitle"/>
            <span className="content">Content:</span>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <span className="topic">Topic:</span>
            <select name="" id="">
                <option>Nutrition</option>
                <option>Health</option>
                <option>Beauty</option>
            </select>
            <span className="post">Post it!</span>
        </div>
      </div>
    );
  }
}

export default PostQuestion;
