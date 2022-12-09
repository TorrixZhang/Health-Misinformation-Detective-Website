import React from 'react';
import { Link } from "react-router-dom";

const signTitleCheckStyle = {
    color: '#979797'
}

export default function LoginTitle() {
    return (
        <div>
            <header id="sign-title">
                <ul>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup" style={signTitleCheckStyle}>Sign Up</Link></li>
                </ul>
            </header>
            <hr />
        </div>
    )

}
