Chart.defaults.global.defaultFontFamily = 'Trebuchet MS';
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.color = 'black';


function makeChart(songs) {
  var songLabels = songs.map(function(d) {return d.title});
  var popsData = songs.map(function(d) {return d.popularity});
  var songColors = songs.map(function(d) {return d.id === '1' ? 'orange' : 'gainsboro';});
  /*var songColors = songs.map(function(d) {return d.year = '2010' + 'orange'});
  var songColors = songs.map(function(d) {return d.year = '2011' +'red'});
  var songColors = songs.map(function(d) {return d.year = '2012' + 'green'});
  var songColors = songs.map(function(d) {return d.year = '2013' + 'grey'});
  var songColors = songs.map(function(d) {return d.year = '2014' + 'purple'});
  var songColors = songs.map(function(d) {return d.year = '2015' + 'silver'});
  var songColors = songs.map(function(d) {return d.year ='2016' + 'teal'});
  var songColors = songs.map(function(d) {return d.year = '2017' + 'aqua'});
  var songColors = songs.map(function(d) {return d.year = '2018' + 'pink'});
  var songColors = songs.map(function(d) {return d.year = '2019' + 'gold'});*/


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

/*function changeData(){
  document.querySelector('.box').style.color = 'blue';
}*/

// Request data using D3
d3.csv('/static/top50_v2.csv')
  .then(makeChart);
