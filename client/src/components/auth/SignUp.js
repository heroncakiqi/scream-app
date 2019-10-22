import React, { useEffect, useContext, useRef } from 'react'

import { Context } from '../../context/GlobalState';

const SignUp = props => {
  const { auth, getToken, removeAuthError } = useContext(Context);
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    return () => {
      return getToken.errorMessage ? removeAuthError() : '';
    }
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    const signupForm = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    getToken(signupForm, () => {
      console.log('done')
    }, {signup: true});
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
          <label>Password:</label>
          <input ref={passwordRef} type="password"/>
          <span> {auth.errorMessage && auth.errorMessage.password}</span>
        </fieldset>
        <button>Sign Up!</button>
        </form>
      </div>
    )
}



export default SignUp