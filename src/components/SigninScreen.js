import React, { useRef, useState } from 'react';
import { auth, signInWithEmailAndPassword } from "../hooks/firebase.js";
import './SigninScreen.css';
import RegisterUser from './RegisterUser.js';

function SigninScreen(props) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [newUser, setNewUser] = useState(false);

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value || props.emailID,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="SignupScreen">
            {newUser ? (
                <RegisterUser emailID={props.emailID} />
            ) : (
                <form className="form flex flex-col" onSubmit={signIn}>
                    <h1 className='formTitle'>Sign In</h1>
                    <input 
                        ref={emailRef} 
                        placeholder={props?.emailID || "Email address"} 
                        className={`formInput ${props?.emailID ? "placeholder-color" : ""}`} 
                        type="email" 
                        required 
                    />
                    <input 
                        ref={passwordRef} 
                        placeholder="Password" 
                        type="password" 
                        className="formInput" 
                        required 
                    />
                    <button type="submit" className="formButton">Sign In</button>
                    <h3 className='signupScreen_message'>
                        <span className="signupScreen_gray">New to Netflix? </span>
                        <span 
                            className="signupScreen_link" 
                            onClick={() => setNewUser(true)}
                        >
                            Sign up now.
                        </span>
                    </h3>
                </form>
            )}
        </div>
    );
}

export default SigninScreen;
