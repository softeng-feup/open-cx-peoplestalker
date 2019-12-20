
window.addEventListener("load", getData(genFunction));
function getData(callbackIN) {
  var ref = firebase.database().ref("sensor/dht/");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}

function genFunction(data) {
for (var i = 0; i < window.chartname.length; i++) {

  var arrData = [];
  for (var prop in data) {
    if (Object.prototype.hasOwnProperty.call(data, prop)) {
      arrData.push(data[prop]);
    }
  }

console.log(arrData[1]['DateTime']);

console.log(Date.parse(arrData[1]['DateTime']));
console.log(Date.parse(window.startingtime[i]));

  var cdata = [];
  var len = arrData.length;
  for(var j=1; j<len; j++) {
    if((Date.parse(arrData[j]['DateTime']) > Date.parse(window.startingtime[i]))&&(Date.parse(arrData[j]['DateTime']) < Date.parse(window.endtime[i]))) {
      console.log("AAAAAAAA");
    cdata.push({
      label: arrData[j]['DataTime'],
      value: arrData[j]['PeopleInRoom']
    });

  }
  }


  window.chartname[i] = new FusionCharts({
    type: 'area2d',
    renderAt: window.chartId[i],
    width: '650',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Presentation Atendees",
            "subCaption": "AI in the modern world.",
            "yaxisname": "Atendees",
            "xaxisname": "Time",
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
  window.chartname[i].render();
}
}
