import React, { useReducer } from 'react';
import axios from 'axios';

import { signupReducer, INITIAL_STATE } from './AuthReducers';
import {AUTH_USER, AUTH_ERROR} from '../actions/types';

export const Context = React.createContext();

const GlobalState = ({ children }) => {

  // declare state
  const [auth, authDipatch] = useReducer(signupReducer);

  const getToken = async (formProps, callback, {signup: props = false}) => {
    try {
      const res = await axios.post(`http://localhost:6969/${props ? 'signup' : 'login'}`, formProps);  
      authDipatch({ 
        type: AUTH_USER, 
        payload: res.data.token 
      });
      localStorage.setItem('token', res.data.token);
      callback();
     }
     catch(err) {
      if(err.respose) {
        authDipatch({ type: AUTH_ERROR, payload: err.response.data });
      } else {
        console.log(err)
      }
     }
  }

  const removeAuthError = () => {
    authDipatch({ type: AUTH_ERROR, payload: ''});
  }

  const logout = () => {
    localStorage.removeItem('token');
    authDipatch({
      type: AUTH_USER,
      payload: ''
    })
  }


  return (
    <Context.Provider
      value={{
        auth,
        getToken,
        removeAuthError,
        logout
      }}
    >
      {children}
    </Context.Provider>
  )

}

export default GlobalState;