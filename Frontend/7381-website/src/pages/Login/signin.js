import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as loginActionCreators } from './store';
import SignInForm from "./signInForm";

class Signin extends Component {
    render() {
        return (
            <SignInForm />
        )
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginFn: bindActionCreators(loginActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);