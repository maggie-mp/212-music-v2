Chart.defaults.global.defaultFontFamily = 'Trebuchet MS';
Chart.defaults.global.defaultFontColor = '#333';

// Request data using D3
d3.csv('/static/top50.csv')
  .then(makeChart);

function makeChart(songs) {
  var songLabels = songs.map(function(d) {return d.title});
  var popsData = songs.map(function(d) {return d.popularity});


  var chart = new Chart('chart', {
 type: 'horizontalBar',
    data: {
      labels: songLabels,
      datasets: [
        {
          data: popsData
        } 
      ]
    }
  });
}