// import { Link, withRouter } from "react-router-dom";
// import SignupTitle from "./signuptitle";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as registerActionCreaters } from "../Register/store";
import SignupForm from "./signupForm";

function SignupConfirm() {

    alert("The account has been created");

}

function validate() {
    let password1 = document.getElementsByName("password").value;
    let password2 = document.getElementsByName("confirmpassword").value;
    let confirmpassword;
    if (password1 != password2) {
        window.alert("Wrong passwords");
        confirmpassword.focus();
        return false;
    }
    return true;
}

class Signup extends Component {
    render () {
        return <SignupForm {...this.props} />
    }
};

const mapStateToProps = state => {
    return {
        registerData: state.Signup
    }


}

const mapDispatchToProps = dispatch => {
    return {
        registerFn: bindActionCreators(registerActionCreaters, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);