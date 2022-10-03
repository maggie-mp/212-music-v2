d3.csv('./top50.csv')
  .then(makeChart);

function makeChart(songs) {
  var songsLabels = songs.map(function(d) {return d.title});

  var chart = new Chart('chart', {
    type: 'horizontalBar',
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [10, 20, 30]
        }
      ]
    }
  });
}