import React, { Component } from "react";
import ExpertHeader from "./NavComponents/navExpertSign";

class AboutTeam extends Component {
  render() {
    return (
      <div>
        <ExpertHeader />
        <div className="team">
            <h1 className="title">About Our Team</h1>
            <div className="photoList">
                <div className="photo"></div>
                <div className="photo"></div>
                <div className="photo"></div>
            </div>
            <div className="photoList">
                <div className="photo"></div>
                <div className="photo"></div>
                <div className="photo"></div>
            </div>
            <div className="photoList">
                <div className="photo"></div>
                <div className="photo"></div>
                <div className="photo"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default AboutTeam;
