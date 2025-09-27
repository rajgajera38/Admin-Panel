// pie chart 

var ctx = document.getElementById('myChart');
var earning = document.getElementById('earning');

  var mychart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Facebook', 'Amazone', 'Flipcart'],
      datasets: [{ 
        label: 'Traffic',
        data: [1600, 1900, 2100],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
        ],

        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
      ],
      }]  
    },
    options: {
      responsive: true,
    }
  });


// earning chart 

  new Chart(earning, {
      type: 'bar',
      data: {
          labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Earning',
              data: [18000, 16500, 17000, 14300, 14500, 18000, 20500, 17900, 17400, 19200, 16400, 13200],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 155, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
    
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 155, 1)',
              'rgba(255, 159, 64, 1)',
          ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });