import { 
  FETCH_POSTS, 
  LIKE_POST, 
  LOGOUT, 
  ADD_POST, 
  FETCH_COMMENTS, 
  ADD_COMMENT
} from '../actions/types';
import createContext from "./createContext";
import screamApi from "../api/screamApi";


const postsReducer = (state, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return action.payload.map(item => ({data: item, comments: {isOpen: false, loaded:[]}}));
    case LIKE_POST:
      const newStateLikePost = [].concat(state)
      const postIndex = newStateLikePost.findIndex((x) => x.data._id === action.payload._id)
      newStateLikePost[postIndex].data = action.payload
      return newStateLikePost
    case ADD_POST:
      const newStateAddPost = [].concat(state)
      newStateAddPost.unshift({data: action.payload, comments: {isOpen: false, loaded:[]}})
      return newStateAddPost
    case FETCH_COMMENTS:
      const newStateWithComments = [].concat(state)
      const postIndex2 = newStateWithComments.findIndex((x) => x.data._id === action.payload.screamId)
      console.log(postIndex2)
      newStateWithComments[postIndex2].comments = action.payload.comments
      return newStateWithComments
    case ADD_COMMENT:
      return state
    case LOGOUT:
      return [];
    default:
      return state;
  }
}

const fetchData = dispatch => async () => {
  try{
    const res = await screamApi.get('/screams');
    dispatch({type: FETCH_POSTS, payload: res.data});
  } catch(err) {
    console.log(err)
  }
}

const postScream = dispatch => async data => {
  const res = await screamApi.post('/scream', {text: data})
  dispatch({type: ADD_POST, payload: res.data})
}

const like = dispatch => async (id) => {
 const res = await screamApi.post(`/scream/like/${id}`);
 dispatch({type: LIKE_POST, payload: res.data})
}

const fetchComments = dispatch => async scream => {
  if(scream.comments.isOpen) {
    dispatch({type: FETCH_COMMENTS, 
      payload: { screamId: scream.data._id, comments: {isOpen: false}}})
  } else{
    const res = await screamApi.get(`/comment/${scream.data._id}`);
    dispatch({type: FETCH_COMMENTS, 
      payload: { screamId:scream.data._id, comments:{isOpen: true, loaded: res.data}}})
  }
}

const addComments = dispatch => async () => {
}

export const { Context, Provider } = createContext(postsReducer, {
 fetchData,
 like,
 postScream,
 fetchComments
}, [])