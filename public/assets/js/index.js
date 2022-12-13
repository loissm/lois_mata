const data = {
  datasets: [{
    label: 'Today',
    data: [{
      x: 0,
      y: 10
    }, {
      x: 2,
      y: 32
    }, {
      x: 5,
      y: 29
    }, {
      x: 8,
      y: 58
    }, {
      x: 12,
      y: 16
    }, {
      x: 16,
      y: 48
    }, {
      x: 19,
      y: 38
    }],
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: '#3751FF',
    showLine: true,
    tension: 0.5,
    pointStyle: 'circle',
    backgroundColor: '#3751FF',
    pointRadius: 0,
    pointHoverRadius: 5,
    pointHitRadius: 15,
  }, {
    label: 'Yesterday',
    data: [{
      x: 0,
      y: 33,
    }, {
      x: 2,
      y: 34
    }, {
      x: 4,
      y: 22
    }, {
      x: 9,
      y: 35
    }, {
      x: 13,
      y: 18
    }, {
      x: 16,
      y: 42
    }, {
      x: 17,
      y: 30
    }, {
      x: 19,
      y: 35
    }],
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: '#DFE0EB',
    showLine: true,
    tension: 0.5,
    pointRadius: 0,
    pointHitRadius: 15,
  }],
};

const config = {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 0,
        max: 22,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          stepSize: 1
        }
      },
      y: {
        type: 'linear',
        position: 'right',
        min: 0,
        max: 60,
        border: {
          display: false,
        },
        ticks: {
          stepSize: 10
        }
      },
    },
    plugins: {
      legend: {
        align: 'end',
        labels: {
          boxHeight: 1,
        }	
      }
    }
  }
};

const ctx = document.getElementById('myChart');

new Chart(ctx,config)

// Populate html infoCards with json data
$.ajax({
  url: 'data/content.json',
  success: function(results) {
    results.ticketData.forEach(e => {
      $(".infoCards").append('<div class="feature col"><div id="featureBox"><p class="text-center my-2">' + e.type + '</p><h3 class="fs-2 text-center">' + e.amount + '</h3></div></div>')
    })
  }
})