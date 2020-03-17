import createContext from "./createContext";
import screamApi from "../api/screamApi"
import { AUTH_USER, AUTH_ERROR, LOGOUT } from '../actions/types';

const signupReducer = (state, action) => {
  switch(action.type) {
    case AUTH_USER:
      return {...state, authenticated: action.payload};
    case AUTH_ERROR:
      return {...state, errorMessage: {...action.payload}};
    case LOGOUT: 
      return {
        authenticated : '',
        errorMessage: {
          email: '',
          password: ''
        }
      }
    default:
      return state;
  }
}

  // get user token
  const getToken = dispatch => async (formProps, callback, {signup: props = false}) => {
    try {
      const res = await screamApi.post(`/${props ? 'signup' : 'login'}`, formProps);  
      screamApi.defaults.headers.Authorization = res.data.token
      dispatch({ 
        type: AUTH_USER, 
        payload: res.data.token 
      });
      localStorage.setItem('token', res.data.token);
      callback();
     }
     catch(err) {
      if(err.response) {
        dispatch({ type: AUTH_ERROR, payload: err.response.data });
      } else {
        console.log(err)
      }
     }
  }

  // remove the error from the auth form
  const removeAuthError = (dispatch) => () => {
    dispatch({ type: AUTH_ERROR, payload: ''});
  }

  // log the user out
  const logout = (dispatch) => () => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT })
  }

  export const { Context, Provider } = createContext(signupReducer, {
    getToken, removeAuthError, logout
  }, {
    authenticated : localStorage.getItem('token') || '',
    errorMessage: {
      email: '',
      password: ''
    }
  }
)