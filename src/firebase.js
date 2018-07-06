import * as firebase from 'firebase';

class DataProvider {
  
  instance = {};
  listeners = {};
  
  constructor() {
    
  
    
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB2OgpFprYUIHrRXTQuAa7lX2SxbMbLtLM",
      authDomain: "golf-app-27348.firebaseapp.com",
      databaseURL: "https://golf-app-27348.firebaseio.com",
      projectId: "golf-app-27348",
      storageBucket: "golf-app-27348.appspot.com",
      messagingSenderId: "519591727968"
    };
    firebase.initializeApp(config);

    firebase.firestore().settings({ timestampsInSnapshots: true });
    
    this.instance = firebase.firestore();
    //Was going to call enablePersistence() but it does not look like i have to. when i try, it just white screens
  }
  
  
  listenToProfile(id, cb) {
    return new Promise((resolve, reject) => {
      const listener = database.instance.collection('profile').doc(id).onSnapshot( snapshot => {
          let testObj = {};  
//            console.log(snapshot);
          if(snapshot){
              testObj = snapshot.data();
            // console.log("test obj is",testObj);
          }
          cb(testObj);
          resolve(testObj);
      })
      this.listeners['profile'] = listener;
    });
  }
  
  stopListenToProfile(){
    if(this.listeners['profile']){
      this.listeners['profile']();
      delete this.listeners['profile'];
    }
    
  }

}


export const database = new DataProvider();
