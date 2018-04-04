//variable
var dataPoints = [];
var chart = null;

CanvasJS.addColorSet("customSet",
            [
            //"#E59400",
            "#002868",
            "#BF0A30",
            ]);
function getDataPointsFromCSV(csv) {
  // Code that I copied from: https://canvasjs.com/docs/charts/how-to/create-charts-from-csv/
    var dataPoints = csvLines = points = [];
    csvLines = csv.split(/[\r?\n|\r|\n]+/);

    for (var i = 1; i < csvLines.length; i++)
        if (csvLines[i].length > 0) {
            points = csvLines[i].split(",");
            dataPoints.push({
                label: String(points[0]), //State
                y: parseFloat(points[7]), // drivers/billion miles
                // percentSpeeding: parseFloat(points[2]),
                // percentDrinking: parseFloat(points[3]),
                // percentNotDistracted: parseFloat(points[4]),
                // percentNoAccidentsYet: parseFloat(points[5]),
                // carInsurance: parseFloat(points[6]),
                // collisionsLoss: parseFloat(points[7])

	    });
	}
    return dataPoints;
}



$.get("https://raw.githubusercontent.com/fivethirtyeight/data/master/bad-drivers/bad-drivers.csv", function(data) {
  var csv = getDataPointsFromCSV(data)
  var chart = new CanvasJS.Chart("chartContainer", {
    colorSet: "customSet",
      title: {
        fontSize: 32,
        fontFamily: "Tahoma",
        fontWeight: "bold",
        text: "Insurance Company Loss per Driver"},
      animationEnabled: true,
      axisY: {
        labelFontSize: 14,
        titleFontSize: 26,
        title: "Average loss per insured driver in dollars"},
      axisX:{
        interval: 1,
        labelFontSize: 14,
        titleFontSize: 26,
        title: "State"},
      data: [{
        type: "bar",
        dataPoints: []
      }]
  });
  chart.options.data[0].dataPoints = csv;
  chart.render();
  function compareDataPointYAscend(dataPoint1, dataPoint2) {
      return dataPoint1.y - dataPoint2.y;
  }
  function compareDataPointYDescend(dataPoint1, dataPoint2) {
      return dataPoint2.y - dataPoint1.y;
  }
  function compareDataPointName(dataPoint1, dataPoint2) {
    if(dataPoint1.label < dataPoint2.label) return 1;
    if(dataPoint1.label > dataPoint2.label) return -1;
    return 0;
  }
  $("#sort-highest").click(function(){
    chart.options.data[0].dataPoints = (getDataPointsFromCSV(data));
    chart.options.data[0].dataPoints.sort(compareDataPointYAscend);
    chart.render();
  });
  $("#all-states").click(function(){
    chart.options.data[0].dataPoints = (getDataPointsFromCSV(data));
    chart.options.data[0].dataPoints.sort(compareDataPointName);
    chart.render();
  });

});
