
d3.csv('https://docs.google.com/spreadsheets/d/1w9VFGi9YvxE4qnui7349rdhguLaNH10t40ferIZ15c0/edit?usp=sharing')
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