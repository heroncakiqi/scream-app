import { TOGGLE_MODAL } from '../actions/types';
import createContext from "./createContext";


const globalReducer = (state, action) => {
  switch(action.type) {
    case TOGGLE_MODAL:
      return {...state, modal: !state.modal};
    default:
      return state;
  }
}

  //toggle Modal
  const toggleModal = dispatch => async () => {
    dispatch({type: TOGGLE_MODAL})
  }

  export const { Context, Provider } = createContext(globalReducer, {
    toggleModal
   }, {modal: false})