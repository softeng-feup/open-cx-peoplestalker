
FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
        type: 'cylinder',
        renderAt: 'chart-container2',
        width: '700',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            // Chart Configuration
            "chart": {
                "caption": "Fuel Meter",
                "subcaption": "Diesel level in generator Bakersfield Central",
                "subcaptionFontBold": "0",
                "lowerLimit": "0",
                "upperLimit": "120",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": " ltrs",
                "showhovereffect": "1",
                "theme": "fusion"
            },
            "value": "110"
        }
    });
    fusioncharts.render();
});