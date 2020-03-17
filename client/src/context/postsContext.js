import { FETCH_POSTS, LIKE_POST, LOGOUT, ADD_POST, FETCH_COMMENTS} from '../actions/types';
import createContext from "./createContext";
import screamApi from "../api/screamApi";


const postsReducer = (state, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return action.payload;
    case LIKE_POST:
      const newStateLikePost = [].concat(state)
      const postIndex = newStateLikePost.findIndex((x) => x._id === action.payload._id)
      newStateLikePost[postIndex] = action.payload
      return newStateLikePost
    case ADD_POST:
      const newStateAddPost = [].concat(state)
      newStateAddPost.unshift(action.payload)
      return newStateAddPost
    case FETCH_COMMENTS:
      const newStateWithComments = [].concat(state)
      const postIndex2 = newStateWithComments.findIndex((x) => x._id === action.payload.screamId)
      newStateWithComments[postIndex2].loadedComments = action.payload.comments
      return newStateWithComments
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
  if(scream.loadedComments) {
    dispatch({type: FETCH_COMMENTS, payload: {screamId: scream._id, comments: null}})
  } else{
    const res = await screamApi.get(`/comment/${scream._id}`);
    dispatch({type: FETCH_COMMENTS, payload: res.data})
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