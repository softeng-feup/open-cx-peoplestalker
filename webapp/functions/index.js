const functions = require('firebase-functions');
const firebase = require("firebase");
// Required for side-effects
require("firebase/functions");



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

var rootRef = firebase.database().ref();

var database = firebase.database();

 exports.helloWorld = functions.https.onRequest((request, response) => {
 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions
const dbRefObject =firebase.database().ref('sensor/dht/-LvQI5oSFFVxAGnFwiOP');
   dbRefObject.on('value',snap=> response.send(snap.val()));
   });
