import React, { Component } from "react";
import Header from "./navigation";

class ExpertPortfolio extends Component {
  render() {
    return (
      <div>
        <div className="QA_navigation">Expert Portfolio</div>

        <div className="expert">
          <div className="photo"></div>
          <div className="info">
            <p className="name">Jerry</p>
            <p className="type">Professional in Nutrition & Health</p>
            <p className="num">
              <span>Answer: 10</span>
              <span>Article: 3</span>
              <span>Video: 1</span>
            </p>
          </div>
        </div>

        <div className="expertIntro">
          <h2>Introduction:</h2>
          <p>
            Balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala.
            Balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala.
            Balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala, balabala, balabala, balabala,
            balabala, balabala, balabala.
          </p>
        </div>
      </div>
    );
  }
}

export default ExpertPortfolio;
