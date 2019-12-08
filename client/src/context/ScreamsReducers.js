import { FETCH_SCREAMS } from '../actions/types';
export const INITIAL_STATE = [];

export const screamsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_SCREAMS:
      return action.payload;
    default:
      return state;
  }
}