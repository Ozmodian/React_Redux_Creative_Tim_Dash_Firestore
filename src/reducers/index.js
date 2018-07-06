import { combineReducers } from 'redux';
import PostReducer from  './postReducer'; 

export default combineReducers({
  profile: PostReducer
});