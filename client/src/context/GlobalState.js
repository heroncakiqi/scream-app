import React, { useReducer } from 'react';
import axios from 'axios';

import { signupReducer, INITIAL_STATE } from './AuthReducers';
import { screamsReducer } from './ScreamsReducers';
import { userReducer } from './userReducer';
import {AUTH_USER, AUTH_ERROR, FETCH_SCREAMS, FETCH_USER} from '../actions/types';

export const Context = React.createContext();

const GlobalState = ({ children }) => {

  // declare state
  const [auth, authDispatch] = useReducer(signupReducer, INITIAL_STATE);
  const [screams, screamsDispatch] = useReducer(screamsReducer, []);
  const [user, userDispatch] = useReducer(userReducer, {});

  // get user token
  const getToken = async (formProps, callback, {signup: props = false}) => {
    try {
      const res = await axios.post(`http://localhost:6969/${props ? 'signup' : 'login'}`, formProps);  
      authDispatch({ 
        type: AUTH_USER, 
        payload: res.data.token 
      });
      localStorage.setItem('token', res.data.token);
      callback();
     }
     catch(err) {
      if(err.response) {
        authDispatch({ type: AUTH_ERROR, payload: err.response.data });
      } else {
        console.log(err)
      }
     }
  }

  // remove the error from the auth form
  const removeAuthError = () => {
    authDispatch({ type: AUTH_ERROR, payload: ''});
  }

  // log the user out
  const logout = () => {
    localStorage.removeItem('token');
    authDispatch({
      type: AUTH_USER,
      payload: ''
    })
  }

  // fetch the current user
  const fetchUser = async () => {
    try {
      const res = await axios.get('http://localhost:6969/user', {
        headers: {
          Authorization: auth.authenticated
        }
      });
      userDispatch({type: FETCH_USER, payload: res.data});
    }catch(err) {
      console.log(err);
    }
  }

  // fetch the screams list
  const fetchData = async () => {
    try{
      const res = await axios.get('http://localhost:6969/screams', {
        headers: {
          Authorization: auth.authenticated
        }
      });
      screamsDispatch({type: FETCH_SCREAMS, payload: res.data});
    } catch(err) {
      console.log(err)
    }
  }


  return (
    <Context.Provider
      value={{
        auth,
        getToken,
        removeAuthError,
        logout,
        screams,
        user,
        fetchUser,
        fetchData
      }}
    >
      {children}
    </Context.Provider>
  )

}

export default GlobalState;