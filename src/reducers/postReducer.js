import {FETCH_POSTS, GET_PROFILE} from '../actions/PostActions'


export default function ( state = {}, action) {
    //console.log("at reducer", action);
    switch(action.type) {
        case FETCH_POSTS:
            return action.payload
        case GET_PROFILE:
           // console.log("at get profile");
            return action.payload            
        default:
        return state;
    }
    
    
}