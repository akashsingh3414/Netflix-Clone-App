import React, { useState, useRef } from 'react';
import "./LoginScreen.css";
import SigninScreen from './SigninScreen';
import Navbar from './Navbar';

export default function LoginScreen() {

    const [signIn, setSignIn] = useState(false);
    const emailIdref = useRef(null);

    return (
        <div className="LoginScreen text-white">
            <Navbar onLoginPage={true} useFunc={[signIn, setSignIn]}/>
            
            <div className="LoginScreen_body">
                {signIn ? (
                    <SigninScreen emailID={emailIdref.current?.value} />
                ) : (
                    <div className='content'>
                        <div className='textContent'>
                            <h1 className="text-white">Unlimited films, TV shows and more</h1>
                            <h2 className="text-white">Watch anywhere. Cancel at any time.</h2>
                            <h3 className="text-white">Ready to watch? Enter your email to create or restart your membership.</h3>
                        </div>
                        <div className="inputContent flex justify-center">
                            <form className="" onSubmit={(e)=>{
                                e.preventDefault();
                                setSignIn(true);
                            }}>
                                <input 
                                    className="inputBox" 
                                    type="email" 
                                    placeholder="Email address" 
                                    ref={emailIdref} 
                                />            
                                <button className="getStartedButton" onClick={()=>{
                                    setSignIn(true);
                                }}>
                                    Get Started
                                </button>                                 
                            </form>
                        </div>  
                    </div>
                )}
            </div>
        </div>
    );
}