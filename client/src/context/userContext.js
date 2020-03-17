import { FETCH_USER, LOGOUT } from '../actions/types';
import createContext from "./createContext";
import screamApi from "../api/screamApi";


const userReducer = (state, action) => {
  switch(action.type) {
    case FETCH_USER:
      return action.payload;
    case LOGOUT:
      return {}
    default:
      return state;
  }
}

  // fetch the current user
  const fetchUser = dispatch => async () => {
    try {
      const res = await screamApi.get('/user');
      dispatch({type: FETCH_USER, payload: res.data});
    }catch(err) {
      console.log(err);
    }
  }

  export const { Context, Provider } = createContext(userReducer, {
    fetchUser
   }, {})
