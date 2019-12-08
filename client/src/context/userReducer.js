import { FETCH_USER } from '../actions/types';
export const INITIAL_STATE = {};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}