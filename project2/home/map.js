Plotly.d3.csv('https://raw.githubusercontent.com/antoniopferreira/bad-drivers/master/bad-drivers.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }
 var data = [{
              type: 'choropleth',
              locationmode: 'USA-states',
              locations: unpack(rows, 'Code'),
              z: unpack(rows, 'Number of drivers involved in fatal collisions per billion miles'),
              text: unpack(rows, 'State'),
              zmin: 0,
              zmax: 24,
              colorscale: [
                [0, 'rgb(254,229,217)'], [0.2, 'rgb(252,187,161)'],
                [0.4, 'rgb(252,146,114)'], [0.6, 'rgb(251,106,74)'],
                [0.8, 'rgb(222,45,38)'], [1, 'rgb(165,15,21)']
              ],
            marker: {
              line:{
                color: 'rgb(255,255,255)',
                width: 2
              }
            }
          }];
console.log(data.locations);
  var layout = {
          title: 'Number of drivers involved in fatal collisions per billion miles',
          geo:{
            scope: 'usa',
            showlakes: true,
            lakecolor: 'rgb(255,255,255)'
          }
      };
      Plotly.plot(myDiv, data, layout, {showLink: false});
  });
