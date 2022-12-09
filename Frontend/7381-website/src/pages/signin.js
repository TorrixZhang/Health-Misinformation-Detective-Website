import { Link } from "react-router-dom";
import LoginTitle from "./logintitle";

const logoStyle = {
    position: 'absolute',
    width: '397px',
    height: '131px',
    left: '122px',
    top: '83px'
}

const textsStyle = {
    position: 'absolute',
    left: '8.47%',
    right: '57.78%',
    top: '26.59%',
    bottom: '26.23%',
    fontFamily: "'DM Sans', sans-serif",
    color: '#113f67'
}

const titleStyle = {
    fontSize: '50px',
    fontWeight: 'Bold',
}

const contentStyle = {
    fontStyle: 'normal',
    fontSize: '30px',
    fontWeight: '500'
}

export default function Signin() {
    return (
        <div id="signin-page">
            <Link to="/"><img src="./LOGO-H 1.png" style={logoStyle}></img></Link>
            <div style={textsStyle}>
                <h1 style={titleStyle}>We Solve Misinformation in The Best Way for People.</h1>
                <h3 style={contentStyle}>We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.
                    It is definitely the tool you need to speed up your design process.</h3>
            </div>
            <div>
                <form id="sign-form">
                    <LoginTitle />
                    <div>
                        <label className="user-info">
                            <input type="text" name="username" placeholder="Your username..." className="username"/>
                        </label>
                    </div>
                    <div>
                        <label className="user-info">
                            <input type="password" name="password" placeholder="Your password..." className="password"/>
                        </label>
                    </div>
                    <div id="sign-radio">
                        <label>
                            <input type="radio" value="Normal" name="identity" class="identity" />Normal
                        </label>
                        <label>
                            <input type="radio" value="Professional" name="identity" class="identity" />Professional
                        </label>

                    </div>
                    <div>
                        <label id="sign-condition">
                            <input type="checkbox" name="condition" />I agree to the terms of service
                        </label>
                    </div>
                    <div id="sign-btn">
                        <input type="submit" value="Sign In" />
                    </div>


                </form>
            </div>

        </div>
    )
}