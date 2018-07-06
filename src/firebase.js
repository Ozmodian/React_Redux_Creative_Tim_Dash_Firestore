import * as firebase from 'firebase';

class DataProvider {
  
  instance = {}; //the actual database instance
  listeners = {}; //used to store thunk listeners and remove when unmounting
  
  constructor() {
    
    // Initialize Firebase
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
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
