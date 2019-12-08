import React, { useRef, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import { Context } from '../../context/GlobalState';

const LogIn = (props) => {
  const { auth, getToken, removeAuthError } = useContext(Context);
  let history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    return () => {
      if(auth.errorMessage){
        removeAuthError();
      }
    }
  },[]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const signupForm = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    getToken(signupForm, () => {
      history.push('/');
    }, {})
  }
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Email:</label>
          <input ref={emailRef} type="text"/>
          <span>{auth.errorMessage && auth.errorMessage.error}</span>
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <input ref={passwordRef} type="password"/>
          <span>{auth.errorMessage && auth.errorMessage.password}</span>
        </fieldset>
        <button>Log In!</button>
        </form>
      </div>
    )
}


export default LogIn