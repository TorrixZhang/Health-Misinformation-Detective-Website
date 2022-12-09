import React from 'react';
import { Link } from "react-router-dom";

const signTitleCheckStyle = {
    color: '#979797'
}

export default function SignupTitle() {
    return (
        <div>
            <header id="sign-title">
                <ul>
                    <li><Link to="/signin" style={signTitleCheckStyle}>Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </header>
            <hr />
        </div>
    )

}
