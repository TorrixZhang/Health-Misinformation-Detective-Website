import { Link } from "react-router-dom";
import React, { Component } from "react";
import LoginTitle from "./logintitle";
import withNavigateHook from "../withNavigateHook";

const logoStyle = {
  position: "absolute",
  width: "397px",
  height: "131px",
  left: "122px",
  top: "83px",
};

const textsStyle = {
  position: "absolute",
  left: "8.47%",
  right: "57.78%",
  top: "26.59%",
  bottom: "26.23%",
  fontFamily: "'DM Sans', sans-serif",
  color: "#113f67",
};

const titleStyle = {
  fontFamily: "DM Sans",
  fontSize: "40px",
  fontWeight: "Bold",
  lineHeight: "150%",
};

const contentStyle = {
  fontStyle: "normal",
  fontSize: "30px",
  fontWeight: "500",
};

class SignInForm extends Component {
  state = {
    credentials: { username: "", password: "", identity: "" },
  };
  login = async (event) => {
    event.preventDefault();
    console.log(this.state.credentials);
    fetch("http://localhost:8888/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));

    if (this.state.identity === "Professional") {
      this.props.navigation("/expert/home"); //Navigate to Homepage
    } else {
      this.props.navigation("/expert/home");
    }
  };
  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credential: cred });
  };

  render() {
    return (
      <div id="signin-page">
        <Link to="/">
          <img src="./LOGO-H 1.png" style={logoStyle} alt="logo"></img>
        </Link>
        <div style={textsStyle}>
          <h1 style={titleStyle}>
            Welcome to Misinformation Detective. We identify the misinformation
            in the best way for you.
          </h1>
          <h3 style={contentStyle}>
            Regular users can browse the site and ask questions of the experts.
            In addition to these functions, expert users can review information
            posted by other experts and can answer questions from users.
          </h3>
        </div>
        <div>
          <form id="sign-form" onSubmit={this.login}>
            <LoginTitle />
            <div>
              <label className="user-info">
                <input
                  type="text"
                  name="username"
                  placeholder="Your username..."
                  className="username"
                  value={this.state.credentials.username}
                  onChange={this.inputChanged}
                />
              </label>
            </div>
            <div>
              <label className="user-info">
                <input
                  type="password"
                  name="password"
                  placeholder="Your password..."
                  className="password"
                  value={this.state.credentials.password}
                  onChange={this.inputChanged}
                />
              </label>
            </div>
            <div id="sign-radio">
              <label>
                <input
                  type="radio"
                  value="Normal"
                  name="identity"
                  className="identity"
                  onChange={this.inputChanged}
                />
                Normal
              </label>
              <label>
                <input
                  type="radio"
                  value="Professional"
                  name="identity"
                  className="identity"
                  onChange={this.inputChanged}
                />
                Professional
              </label>
            </div>
            <div>
              <label id="sign-condition">
                <input type="checkbox" name="condition" />I agree to the terms
                of service
              </label>
            </div>
            <div id="sign-btn">
              <input type="submit" value="Sign In" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withNavigateHook(SignInForm);
