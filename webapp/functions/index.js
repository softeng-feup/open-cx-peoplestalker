const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();





exports.addAdminRole = functions.https.onCall((data, context) => {
  // check if request was made by an admin
  if (context.auth.token.admin !== true) {
      return {error: 'only admins can add other admins'}
  }
  // get user and add custom claim (admin)
  return admin.auth().getUserByEmail(data.email).then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
          admin: true
      });
  }).then(() => {
      return {
          message : `Success! ${data.email} has been made an admin`
      }
  }).catch(err => {
      return err;
  });
});



 exports.ammountPeople = functions.https.onRequest((request, response) => {
   const dbRefObject =firebase.database().ref('sensor/dht/');
   dbRefObject.limitToLast(1).on('value',snap=> {snap.forEach(childSnapshot => {let quantity = childSnapshot.child('PeopleInRoom');response.send(quantity);});});});



   exports.percentagePeople = functions.https.onRequest((request, response) => {
    const dbRefObject =firebase.database().ref('sensor/dht/');
    var maxPeopleInRoom = 200; //valor arbitrario por agora
    dbRefObject.limitToLast(1).on('value',snap=> {snap.forEach(childSnapshot => {let quantity = childSnapshot.child('PeopleInRoom');
    var quantityJs = quantity.val();
    var percentage = (quantityJs / maxPeopleInRoom) * 100;
    response.send('<p>' + percentage + '%' + '</p>');});});});   //nao podemos mandar um numero apenas pelo send, daí ter metido num paragrafo

 
 
  exports.maxPeople = functions.https.onRequest((request, response) => {
    const dbRefObject =firebase.database().ref('sensor/dht');
    let max = 0;

    dbRefObject.on('value', function(snapshot){
      let dataValues = snapshot.exportVal();
      let arrayValues = [];
      for (var prop in dataValues) {
        if (Object.prototype.hasOwnProperty.call(dataValues, prop)) {
          arrayValues.push(dataValues[prop]);
        }
      }
      for(var i = 0; i<arrayValues.length ;  i++)
      {
        if(arrayValues[i].PeopleInRoom !== null)
        {
          if(arrayValues[i].PeopleInRoom > max)
          {
            max = arrayValues[i].PeopleInRoom;
          }
        }
      }
      response.send('<p>' + max + '</p>');
    });
   });

 

