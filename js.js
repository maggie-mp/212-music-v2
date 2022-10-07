d3.csv('https://corsproxy.io/?https://www.dropbox.com/s/n0rvcmexfigsakj/top50.csv?dl=0')
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