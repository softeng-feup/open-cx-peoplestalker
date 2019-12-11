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

 exports.ammountPeople = functions.https.onRequest((request, response) => {
   const dbRefObject =firebase.database().ref('sensor/dht/');
   dbRefObject.limitToLast(1).on('value',snap=> {snap.forEach(childSnapshot => {let quantity = childSnapshot.child('counterIn');response.send(quantity);});});});



   exports.percentagePeople = functions.https.onRequest((request, response) => {
    const dbRefObject =firebase.database().ref('sensor/dht/');
    var maxPeopleInRoom = 200; //valor arbitrario por agora
    dbRefObject.limitToLast(1).on('value',snap=> {snap.forEach(childSnapshot => {let quantity = childSnapshot.child('counterIn');
    var quantityJs = quantity.val();
    var percentage = (quantityJs / maxPeopleInRoom) * 100;
    response.send('<p>' + percentage + '%' + '</p>');});});});   //nao podemos mandar um numero apenas pelo send, daí ter metido num paragrafo

 
 
  exports.maxPeople = functions.https.onRequest((request, response) => {
    const dbRefObject =firebase.database().ref('sensor/dht');
    let max = 0;

    dbRefObject.on('value', function(snapshot){
      let dataValues = snapshot.exportVal();
      for(var prop in dataValues)
      {
        if(Object.prototype.hasOwnProperty.call(dataValues, prop))
        {
          response.send(dataValues[prop]);
        }
      }
    });
   });
