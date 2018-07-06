import {database} from '../firebase';
const postDatabse = database.instance.collection('posts');
const profileDatabse = database.instance.collection('profile');

export const FETCH_POSTS = 'fetch_posts';
export const GET_PROFILE = 'get_profile';



export function getPosts() {
   // console.log("called get posts");
    return dispatch => {
      //  console.log("here");
        postDatabse.onSnapshot(snapshot => {
            let testObj = {posts:{}};            
            if(snapshot){
                snapshot.forEach((doc)=>{
                    testObj.posts[doc.id] = doc.data();
                })
            //    console.log("test obj is",testObj);
            }
             dispatch({
                 type: FETCH_POSTS,
                 payload: testObj
             })
        })
    }
}

export function getProfile(id) {
    //console.log("in get profile, database is ", database);
    return dispatch => {
       // console.log("new dispatch");
        database.listenToProfile(id,
            function(data){
               // console.log("here", data);
                dispatch({
                    type: GET_PROFILE,
                    payload: data
                })  
            })
            .then(data => {
            //console.log("my first promise!", data);
          
             });
        // profileDatabse.doc(id).onSnapshot(snapshot => {
        // //profileDatabse.doc(id).get().then(snapshot => {
        //     let testObj = {};  
        //   //  console.log(snapshot);
        //     if(snapshot){
        //         testObj = snapshot.data();
        //       // console.log("test obj is",testObj);
        //     }
        //      dispatch({
        //          type: GET_PROFILE,
        //          payload: testObj
        //      })
        // })
    }
}

export function savePosts(values) {
    //console.log("values", values);
    return dispatch => {
        //console.log("values", values);
        postDatabse.add(values);
    }
}

export function saveProfile(id,values) {
    //console.log("values", values);
    return dispatch => {
      //  console.log("values", values);
        profileDatabse.doc(id).set(values);
    }
}

