//const functions = require('firebase-functions');
//const firebase = require("firebase");
// Required for side-effects
//require("firebase/functions");



//TODO - depois da eliminaçao da realtime pode ser necessario mudar estas informaçoes?
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






window.addEventListener("load", getData(genFunction));
function getData(callbackIN) {
  var ref = firebase.database().ref("sensor/dht");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}
function genFunction(dataObj) {
  let data = [];
  for (var prop in dataObj) {
  if (Object.prototype.hasOwnProperty.call(dataObj, prop)) {
    data.push(dataObj[prop]);
  }
}
  var cdata = [];
  var len = data.length;
  for(var i=1; i<len; i++) {
    cdata.push({
      value: data[i]['PeopleInRoom'],
      label: data[i]['DateTime']
    });
  }
var firebaseChart = new FusionCharts({
    type: 'area2d',
    renderAt: 'chart-container',
    width: '650',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Website Visitors Trend",
            "subCaption": "Last 7 Days{br}ACME Inc.",
            "subCaptionFontBold": "0",
            "captionFontSize": "20",
            "subCaptionFontSize": "17",
            "captionPadding": "15",
            "captionFontColor": "#8C8C8C",
            "baseFontSize": "14",
            "baseFont": "Barlow",
            "canvasBgAlpha": "0",
            "bgColor": "#FFFFFF",
            "bgAlpha": "100",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "showPlotBorder": "0",
            "showAlternateHGridColor": "0",
            "usePlotGradientColor": "0",
            "paletteColors": "#6AC1A5",
            "showValues": "0",
            "divLineAlpha": "5",
            "showAxisLines": "1",
            "drawAnchors": "0",
            "xAxisLineColor": "#8C8C8C",
            "xAxisLineThickness": "0.7",
            "xAxisLineAlpha": "50",
            "yAxisLineColor": "#8C8C8C",
            "yAxisLineThickness": "0.7",
            "yAxisLineAlpha": "50",
            "baseFontColor": "#8C8C8C",
            "toolTipBgColor": "#FA8D67",
            "toolTipPadding": "10",
            "toolTipColor": "#FFFFFF",
            "toolTipBorderRadius": "3",
            "toolTipBorderAlpha": "0",
            "drawCrossLine": "1",
            "crossLineColor": "#8C8C8C",
            "crossLineAlpha": "60",
            "crossLineThickness": "0.7",
            "alignCaptionWithCanvas": "1"
        },
        "data": cdata
    }
});
firebaseChart.render();
}


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

 