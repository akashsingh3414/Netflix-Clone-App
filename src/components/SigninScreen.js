import React, { useRef, useEffect } from 'react';
import './SigninScreen.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function SigninScreen(props) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.emailID) {
            emailRef.current.value = props.emailID;
        }
    }, [props.emailID]);

    const signIn = (e) => {
        e.preventDefault();
        try {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            
            const uid = Math.floor(1000 + Math.random() * 9000);
            console.log('Signed in with:', email);
    
            const userAuth = { uid: uid, email: email, password: password };
            localStorage.setItem('user', JSON.stringify(userAuth));
    
            dispatch(login({
                uid: userAuth.uid,
                email: userAuth.email,
                password: userAuth.password,
            }));
    
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };
    

    return (
        <div className="SignupScreen">
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
                </form>
        </div>
    );
}

export default SigninScreen;
