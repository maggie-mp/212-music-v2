<<<<<<< Updated upstream
Chart.defaults.global.defaultFontFamily = 'Trebuchet MS';
Chart.defaults.global.defaultFontColor = 'white';
=======
Chart.defaults.font.family = 'Trebuchet MS';
Chart.defaults.font.color = 'white';
>>>>>>> Stashed changes
Chart.defaults.color = 'black';


  drawChart();


    // setup 
  async function drawChart(){
      const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '1'],
        datasets: [{
          label: 'Weekly Sales',
          data: [18, 12, 6, 9, 12, 3, 9, 20],
          backgroundColor: [
            'orange',
            'gainsboro',
          ],
          borderColor: [
            'orange',
            'gainsboro',
          ],
          borderWidth: 1
        }]
      };

      // config 
      const config = {
        type: 'bar',
        data,
        options: {
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };

      // render init block
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
    };


    async function getData() {
      const url = '/Users/maggienew/Documents/Github/212-music-v3/static/top50_v3.csv'
      const response = await fetch(url);
      const datapoints = await response.text();
      console.log(datapoints);    }


 /* function makeChart(songs) {
  var songLabels = songs.map(function(d) {return d.title});
  var popsData = songs.map(function(d) {return d.popularity});
  var songColors = songs.map(function(d) {return d.id === '1' ? 'orange' : 'gainsboro';});
<<<<<<< Updated upstream
=======

// Request data using D3
d3.csv('/static/top50_v3.csv')
  .then(makeChart);

>>>>>>> Stashed changes

/*var chart = new Chart('chart', {
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
}

const ctx = document.getElementById('myChart');
*/

<<<<<<< Updated upstream

// Request data using D3
d3.csv('/static/top50_v2.csv')
  .then(makeChart);
=======
>>>>>>> Stashed changes
