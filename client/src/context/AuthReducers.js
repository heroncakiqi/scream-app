import { AUTH_USER, AUTH_ERROR } from '../actions/types';
export const INITIAL_STATE = {
  authenticated : localStorage.getItem('token') ? localStorage.getItem('token') : '',
  errorMessage: {
    email: '',
    password: ''
  }
}

export const signupReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AUTH_USER:
      return {...state, authenticated: action.payload};
    case AUTH_ERROR:
      return {...state, errorMessage: {...action.payload}};
    default:
      return state;
  }
}