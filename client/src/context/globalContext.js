import { TOGGLE_MODAL } from '../actions/types';
import createContext from "./createContext";


const globalReducer = (state, action) => {
  switch(action.type) {
    case TOGGLE_MODAL:
      return {...state, modal: {isOpen: !state.modal.isOpen, content: action.payload}};
    default:
      return state;
  }
}

  //toggle Modal
const toggleModal = dispatch => async (content) => {
  dispatch({type: TOGGLE_MODAL, payload: content || ""})
}

export const { Context, Provider } = createContext(globalReducer, {
  toggleModal
}, {modal: {isOpen: false, content: ""}})