import React, { useRef, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import { Context as AuthContext } from '../../context/authContext';

const LogIn = (props) => {
  const { state, getToken, removeAuthError } = useContext(AuthContext);
  let history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    return () => {
      if(state.errorMessage){
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
          <span>{state.errorMessage && state.errorMessage.error}</span>
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <input ref={passwordRef} type="password"/>
          <span>{state.errorMessage && state.errorMessage.password}</span>
        </fieldset>
        <button>Log In!</button>
        </form>
      </div>
    )
}


export default LogIn