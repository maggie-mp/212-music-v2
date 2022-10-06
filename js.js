d3.csv('top50.csv')
  .then(makeChart);

function makeChart(songs) {
  var songLabels = songs.map(function(d) {return d.title});


  var chart = new Chart('chart', {
    type: 'horizontalBar',
    data: {
      labels: songLabels,
      datasets: [
        {
          data: [10, 20, 30]
        }
      ]
    }
  });
}