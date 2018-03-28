lineChart.controller("MixedChartCtrl",
  function ($scope) {
    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.data = [
      [65, -59, 80, 81, -56, 55, -40],
      [28, 48, -40, 19, 86, 27, 90]
    ];
    $scope.datasetOverride = [
      {
        label: "Bar chart",
        borderWidth: 1,
        type: 'bar'
      },
      {
        label: "Line chart",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];
});












/*
                              var ctx = document.getElementById("myChart").getContext('2d');
                          var myChart = new Chart(ctx, {
                            type: 'pie',
                            data: {
                              labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"],
                              datasets: [{
                                backgroundColor: [
                                  "#2ecc71",
                                  "#3498db",
                                  "#95a5a6",
                                  "#9b59b6",
                                  "#f1c40f",
                                  "#e74c3c",
                                  "#34495e"
                                ],
                                data: [12, 19, 10, 17, 28, 24]
                              }]
                            }
                          });*/