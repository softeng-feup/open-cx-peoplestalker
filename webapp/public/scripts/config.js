
const config = {
    apiKey: "AIzaSyDuu7q2LruWRsVPBBTCj29MbBkA7fOByKM",
    authDomain: "peoplestalker-318b4.firebaseapp.com",
    databaseURL: "https://peoplestalker-318b4.firebaseio.com",
    projectId: "peoplestalker-318b4",
    storageBucket: "peoplestalker-318b4.appspot.com",
    messagingSenderId: "346776065341",
    appId: "1:346776065341:web:639f59762de831a832a154",
    measurementId: "G-P8V0BXSPEL"
};
  
firebase.initializeApp(config);
  
// make auth and firebase references
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();
const database = firebase.database();

// update firestore settings
//db.settings({timestampsInSnapshots: true});
