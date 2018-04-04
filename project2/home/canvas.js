//variable
var dataPoints = [];
var chart = null;
var lastButton = null;


function getDataPointsFromCSV(csv) {
  // Code that I copied from: https://canvasjs.com/docs/charts/how-to/create-charts-from-csv/
    var dataPoints = csvLines = points = [];
    csvLines = csv.split(/[\r?\n|\r|\n]+/);

    for (var i = 1; i < csvLines.length; i++)
        if (csvLines[i].length > 0) {
            points = csvLines[i].split(",");
            dataPoints.push({
                label: String(points[0]), //State
                y: parseFloat(points[1]), // drivers/billion miles
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
  var csv = getDataPointsFromCSV(data);
  chart = new CanvasJS.Chart("chartContainer", {
      title: {text: "Drivers Involved in a Fatal Collision"},
      animationEnabled: true,
      axisY: {title: "Number of drivers involved in fatal collisions per billion miles",
              interval: 1},
      axisX:{title: "State",
             interval: 1,
             labelFontSize: 14,
             titleFontSize: 26},
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
  $("#sort-highest").click(function(){
    chart.destroy();
    chart = null;
    $("#chartContainer").css("height", "90vh");
    chart = new CanvasJS.Chart("chartContainer", {
        title: {text: "Drivers Involved in a Fatal Collision"},
        animationEnabled: true,
        axisY: {title: "Number of drivers involved in fatal collisions per billion miles",
                interval: 1},
        axisX:{title: "State", interval: 1,
               labelFontSize: 14,
               titleFontSize: 26},
        data: [{
          type: "bar",
          dataPoints: []
        }]
    });
    chart.options.data[0].dataPoints = getDataPointsFromCSV(data);
    chart.options.data[0].dataPoints.sort(compareDataPointYAscend);
    chart.render();
  });
  $("#all-states").click(function(){
    chart.destroy();
    chart = null;$("#chartContainer").css("height", "90vh");
    chart = new CanvasJS.Chart("chartContainer", {
        title: {text: "Drivers Involved in a Fatal Collision"},
        animationEnabled: true,
        axisY: {title: "Number of drivers involved in fatal collisions per billion miles"},
        axisX:{title: "State",
               interval: 1,
               labelFontSize: 14,
               titleFontSize: 26},
        data: [{
          type: "bar",
          dataPoints: []
        }]
    });
    chart.options.data[0].dataPoints = getDataPointsFromCSV(data);
    chart.options.animationEnabled = true;
    chart.render();
  });
  $("#west").click(function(){
    chart.destroy();
    chart = null;
    $("#chartContainer").css("height", "90vh");
    chart = new CanvasJS.Chart("chartContainer", {
        title: {text: "Drivers Involved in a Fatal Collision"},
        animationEnabled: true,
        axisY: {title: "Number of drivers involved in fatal collisions per billion miles"},
        axisX:{title: "State",
               interval: 1},
        data: [{
          type: "bar",
          dataPoints: [
            {y: 18.6, label: "Arizona"},
            {y: 12, label: "California"},
            {y: 13.6, label: "Colorado"},
            {y: 15.3, label: "Idaho"},
            {y: 21.6, label: "Montana"},
            {y: 14.7, label: "Nevada"},
            {y: 18.4, label: "New Mexico"},
            {y: 12.8, label: "Oregon"},
            {y: 11.3, label: "Utah"},
            {y: 10.6, label: "Washington"},
            {y: 17.4, label: "Wyoming"}
          ]
        }]
    });
    chart.options.animationEnabled = true;
    chart.render();
  });
  $("#midwest").click(function(){
    chart.destroy();
    chart = null;
    $("#chartContainer").css("height", "90vh");
    chart = new CanvasJS.Chart("chartContainer", {
        title: {text: "Drivers Involved in a Fatal Collision"},
        animationEnabled: true,
        axisY: {title: "Number of drivers involved in fatal collisions per billion miles"},
        axisX:{title: "State", interval: 1},
        data: [{
          type: "bar",
          dataPoints: [
            {y: 12.8, label: "Illinois"},
            {y: 14.5, label: "Indiana"},
            {y: 15.7, label: "Iowa"},
            {y: 17.8, label: "Kansas"},
            {y: 14.1, label: "Michigan"},
            {y: 9.6, label: "Minnisota"},
            {y: 16.1, label: "Missouri"},
            {y: 14.9, label: "Nebraska"},
            {y: 23.9, label: "North Dakota"},
            {y: 14.1, label: "Ohio"},
            {y: 19.4, label: "South Dakota"},
            {y: 13.8, label: "Wisconsin"},
          ]
        }]
    });
    chart.options.animationEnabled = true;
    chart.render();
  });
  $("#south").click(function(){
    chart.destroy();
    chart = null;
    $("#chartContainer").css("height", "90vh");
    chart = new CanvasJS.Chart("chartContainer", {
        title: {text: "Drivers Involved in a Fatal Collision"},
        animationEnabled: true,
        axisY: {title: "Number of drivers involved in fatal collisions per billion miles"},
        axisX:{title: "State", interval: 1},
        data: [{
          type: "bar",
          dataPoints: [
            {y: 18.8, label: "Alabama"},
            {y: 22.4, label: "Arkansas"},
            {y: 16.2, label: "Delaware"},
            {y: 17.9, label: "Florida"},
            {y: 15.6, label: "Georgia"},
            {y: 21.4, label: "Kentucky"},
            {y: 20.5, label: "Louisiana"},
            {y: 12.5, label: "Maryland"},
            {y: 17.6, label: "Mississippi"},
            {y: 16.8, label: "North Carolina"},
            {y: 19.9, label: "Oklahoma"},
            {y: 23.9, label: "South Carolina"},
            {y: 19.5, label: "Tennessee"},
            {y: 19.4, label: "Texas"},
            {y: 12.7, label: "Virginia"},
            {y: 23.8, label: "West Virginia"}
          ]
        }]
    });
    chart.options.animationEnabled = true;
    chart.render();
  });
  $("#northeast").click(function(){
    chart.destroy();
    chart = null;
    $("#chartContainer").css("height", "90vh");
    chart = new CanvasJS.Chart("chartContainer", {
        title: {text: "Drivers Involved in a Fatal Collision"},
        animationEnabled: true,
        axisY: {title: "Number of drivers involved in fatal collisions per billion miles"},
        axisX:{title: "State", interval: 1},
        data: [{
          type: "bar",
          dataPoints: [

          ]
        }]
    });
    chart.options.data[0].dataPoints = [
      {y: 18.2, label: "Pennsylvania"},
      {y: 8.2, label: "Massachusetts"},
      {y: 10.8, label: "Connecticut"},
      {y: 11.6, label: "New Hampshire"},
      {y: 15.1, label: "Maine"},
      {y: 12.3, label: "New York"},
      {y: 11.2, label: "New Jersey"},
      {y: 13.6, label: "Vermont"},
      {y: 11.1, label: "Rhode Island"}
    ];
    chart.options.animationEnabled = true;
    chart.render();

  });
  $("#others").click(function(){
    chart.destroy();
    chart = null;
    $("#chartContainer").css("height", "90vh");
    chart = new CanvasJS.Chart("chartContainer", {
        title: {text: "Drivers Involved in a Fatal Collision"},
        animationEnabled: true,
        axisY: {title: "Number of drivers involved in fatal collisions per billion miles"},
        axisX:{title: "State", interval: 1},
        data: [{
          type: "bar",
          dataPoints: [
            {y: 5.9, label: "District of Columbia"},
            {y: 17.5, label: "Hawaii"},
            {y: 18.1, label: "Alaska"}
          ]
        }]
    });
    chart.options.animationEnabled = true;
    chart.render();
  });
});
