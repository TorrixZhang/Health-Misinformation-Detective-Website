import { Link } from "react-router-dom";
import SignupTitle from "./signuptitle";
import React, { Component } from "react";
import withNavigateHook from "../withNavigateHook";

const logoStyle = {
  position: "absolute",
  width: "397px",
  height: "131px",
  left: "122px",
  top: "83px",
};

const correctPStyle = {
  position: "absolute",
  marginTop: "15%",
  color: "black",
  fontSize: "13px",
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

function checkEmailFormat() {
  let email = document.getElementsByClassName("email")[0].value;
  let emailCorrect = "";
  //Stylise the hint message
  let pStyle = document.getElementsByTagName("p")[0];
  if (email !== "") {
    let emailAddress =
      /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    emailCorrect = emailAddress.test(email);
    if (!emailCorrect) {
      pStyle.innerHTML = "Please enter a correct email address";
      pStyle.style.position = "absolute";
      pStyle.style.marginTop = "15%";
      pStyle.style.color = "red";
      pStyle.style.fontSize = "13px";
      document.getElementsByClassName("email")[0].focus();
      return false;
    } else {
      pStyle.innerHTML = "";
    }
  }
}

function checkPwInstant() {
  let confirmpassword = document.getElementsByClassName("password")[1].value;
  let password = document.getElementsByClassName("password")[0].value;
  if (password !== confirmpassword) {
    alert("Passwords are not consistent!!!");
  }
}

class SignupForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    identity: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // backend
    const { data } = await this.props.registerFn.registerAc(this.state);
    console.log(data); // The check data in console
    /* this.props.navigation('/') //Navigate to Homepage */
    if (this.state.identity === "Professional") {
      this.props.navigation("/expert/home"); //Navigate to Homepage
    } else {
      this.props.navigation("/");
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, email, password, identity } = this.state;
    return (
      <div id="signup-page">
        <Link to="/">
          <img src="./LOGO-H 1.png" alt="logo" style={logoStyle}></img>
        </Link>
        <div style={textsStyle}>
          <h1 style={titleStyle}>
            Welcome to Misinformation Detective. We identify the misinformation
            in the best way for you.
          </h1>
          <h3 style={contentStyle}>
            The content on our website is published by experts in their
            respective fields and is authoritative. You can read disinformation
            articles and videos on our website and ask questions to experts on
            our website.
          </h3>
        </div>
        <div>
          <form id="signup-form" onSubmit={this.handleSubmit}>
            <SignupTitle />
            <div>
              <label className="user-info">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email..."
                  className="email"
                  onKeyUp={checkEmailFormat}
                  defaultValue={email}
                  onChange={this.handleChange}
                  required
                />
                <p style={correctPStyle}>
                  Please enter the valid email address
                </p>
              </label>
            </div>
            <div>
              <label className="user-info">
                <input
                  type="text"
                  name="username"
                  placeholder="Your username..."
                  className="username"
                  id="username"
                  defaultValue={username}
                  onChange={this.handleChange}
                  required
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
                  defaultValue={password}
                  onChange={this.handleChange}
                  required
                />
                <p style={correctPStyle}>
                  Please enter letters, numbers or common symbols
                </p>
              </label>
            </div>
            <div>
              <label className="user-info">
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm password..."
                  className="password"
                  required
                />
              </label>
            </div>
            <div id="sign-radio">
              <label>
                <input
                  type="radio"
                  value="Normal"
                  name="identity"
                  class="identity"
                  defaultValue={identity}
                  onChange={this.handleChange}
                />
                Normal
              </label>
              <label>
                <input
                  type="radio"
                  value="Professional"
                  name="identity"
                  class="identity"
                  defaultValue={identity}
                  onChange={this.handleChange}
                />
                Professional
              </label>
            </div>
            <div id="sign-btn">
              <input
                type="submit"
                value="Create Account"
                id="createAccount"
                onClick={checkPwInstant}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withNavigateHook(SignupForm);
