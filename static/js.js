Chart.defaults.global.defaultFontFamily = 'Trebuchet MS';
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.color = 'black';

function makeChart(songs) {
  var songLabels = songs.map(function(d) {return d.title});
  var popsData = songs.map(function(d) {return d.popularity});
  var songColors = songs.map(function(d) {return d.year === '2010' ? '#F15F36' : '#19A0AA';});


  var chart = new Chart('chart', {
 type: 'horizontalBar',
  options: {
    /* tooltip: https://www.youtube.com/watch?v=UxJ5d-HGhJA&t=392s
    plugins: {
      tooltip: {
        callbacks: {
          beforeTitle: function(context) {
            return 'before the title';
          },
        } 
      }
    },*/

      maintainAspectRatio: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Popularity out of 100',
              fontSize: 16
            }
          }
        ]
      }
    },
    data: {
      labels: songLabels,

      datasets: [
      {
          data: popsData,
          backgroundColor: songColors
        }
      ]
    }
  })
}



// Request data using D3
d3.csv('/static/top50.csv')
  .then(makeChart);
