import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterUser() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    try {
      console.log('Registered with:', emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className="form flex flex-col" onSubmit={register}>
      <h1 className='formTitle'>Register</h1>
      <p>Email Id</p>
      <input 
        ref={emailRef} 
        placeholder="Email address" 
        className="formInput"
        type="email" 
        required 
      />

      <p>Set Password</p>
      <input 
        ref={passwordRef} 
        placeholder="Password" 
        type="password" 
        className="formInput" 
        required 
      />
      <button type="submit" className="formButton">Register</button>
    </form>
  );
}

export default RegisterUser;
