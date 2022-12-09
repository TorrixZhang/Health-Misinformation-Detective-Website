import { Link } from "react-router-dom";
import SignupTitle from "./signuptitle";

const logoStyle = {
    position: 'absolute',
    width: '397px',
    height: '131px',
    left: '122px',
    top: '83px'
}

function checkEmailFormat () {
    let email=document.getElementsByClassName('email')[0].value;
    let emailCorrect = '';
    if (email != "") {
        let emailAddress = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        emailCorrect = emailAddress.test(email);
        if(!emailCorrect){
            /* alert("Wrong address, please enter a correct email"); */
            document.getElementsByClassName('email')[0].style.background = 'red';
            document.getElementsByClassName('email')[0].focus();
            
            return false;
        }
    }
/*     let username=document.getElementsByClassName('username')[0].value;
    if (username == "") {
        alert("Please enter a username");
    } */
}

const pStyle = {
    position: 'absolute',
    margin: '0',
    display: 'flex',
    alginItems: 'center',
    justifyContent: 'center'
}


export default function Signup() {
    return (
        <div id="signup-page">
            <Link to="/"><img src="./LOGO-H 1.png" style={logoStyle}></img></Link>
            <div>
                <form id="signup-form">
                    <SignupTitle />
                    <div>
                        <label className="user-info">
                            <input type="text" name="email" placeholder="Your email..." className="email"  oninvalid="setCustomValidity('Wrong');" onBlur={checkEmailFormat} />
                        </label>
                        <p style={pStyle}>Please enter a correct email address</p>
                    </div>
                    <div>
                        <label className="user-info">
                            <input type="text" name="username" placeholder="Your username..." className="username" id="username"/>
                        </label>
                    </div>
                    <div>
                        <label className="user-info">
                            <input type="password" name="password" placeholder="Your password..." className="password"/>
                        </label>
                    </div>
                    <div>
                        <label className="user-info">
                            <input type="password" name="password" placeholder="Confirm password..." className="password"/>
                        </label>
                    </div>
                    <div id="sign-radio">
                        <label>
                            <input type="radio" value="Normal" name="identity" class="identity"/>Normal
                        </label>
                        <label>
                            <input type="radio" value="Professional" name="identity" class="identity"/>Professional
                        </label>

                    </div>
                    <div id="sign-btn">
                        <input type="submit" value="Create Account" id="createAccount"/>
                    </div>


                </form>
            </div>

        </div>
    )
}