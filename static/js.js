Chart.defaults.global.defaultFontFamily = 'Trebuchet MS';
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.color = 'black';

function makeChart(songs) {
  var songLabels = songs.map(function(d) {return d.title});
  var popsData = songs.map(function(d) {return d.popularity});
  var songColors = songs.map(function(d) {return d.id === '1' ? 'orange' : 'gainsboro';});

  var chart = new Chart('chart', {
 type: 'horizontalBar',
 data: {
      labels: songLabels,
      datasets: [
      {
          data: popsData,
          backgroundColor: songColors
        }
      ]
    },
    options: {
        tooltip: {
          callbacks: {
            beforeTitle: function(context) {
              return 'before title';
            },
          }
      },
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
  })
  console.log("test");
}



// Request data using D3
d3.csv('/static/top50_v2.csv')
  .then(makeChart);
