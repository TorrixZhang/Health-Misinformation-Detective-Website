import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav id="navigation">
            <div id="logo">
                <img src="./LOGO-H 1.png" id="logo-picture" />
            </div>
            <ul>
                <li><Link to="/about">Article</Link></li>
                <li>Video</li>
                <li>Q&A</li>
            </ul>
            <ul>
                <li><Link to="/signin">Sign In</Link></li>
                <li id="signup"><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    )
}