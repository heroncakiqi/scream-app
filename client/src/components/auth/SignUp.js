import React, { useEffect, useContext, useRef } from 'react'
import { useHistory } from "react-router-dom";

import { Context } from '../../context/GlobalState';

const SignUp = props => {
  const { auth, getToken, removeAuthError } = useContext(Context);
  let history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const userRef = useRef();
  useEffect(() => {
    return () => {
      return getToken.errorMessage && removeAuthError();
    }
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    const signupForm = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      username: userRef.current.value
    }
    console.log(signupForm)
    getToken(signupForm, () => {
      history.push('/');
    },{signup: true});
  }
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Email:</label>
          <input ref={emailRef} type="text"/>
          <span> {auth.errorMessage && auth.errorMessage.email}</span>
        </fieldset>
        <fieldset>
          <label>Username:</label>
          <input ref={userRef} type="text"/>
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <input ref={passwordRef} type="password"/>
          <span> {auth.errorMessage && auth.errorMessage.password}</span>
        </fieldset>
        <button type="submit">Sign Up!</button>
        </form>
      </div>
    )
}



export default SignUp