Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#333';

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