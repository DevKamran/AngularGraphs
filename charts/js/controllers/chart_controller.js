lineChart.controller("ChartCtrl", function($scope,$http) {


    //json api

 /*   $http.get("../json/80229_Ledger.json")
    .then(function(response) {
        $scope.graphData = response.data;
    });*/
     $http.get('..///json/80229_Ledger.json').then(function(result){
        console.log(result);
       /*  $scope.finalArray = [];
        $scope.mainArray = result.data;
        for(var i=0;i<$scope.mainArray.length;i++){
          $scope.finalArray.push($scope.mainArray[i],$scope.mainArray[i].beg_balance)
        }
        console.log($scope.finalArray);
         farzan bhai
        */
            var values = [];
            for (var i=0; i<result.length; i++) {
                values.push([]);
                for (var key in result[i]) {
                    values[i].push(result[i][key]);
                }
            }

            console.log(values);


     })

     

    //json api

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Musharakah Share', 'Rental'];
    $scope.data = [
        [1183.25, 2188.25, 6188.27, 2183.25, 3183.25, 4183.25,18183.25 ],
        [2183.25, 3183.25, 4183.25, 5183.25, 6183.25, 7183.25, 8183.25]
    ];


    //pie chart

    /*$scope.datasetOverride = [{
        yAxisID: 'y-axis-1'
    }, {
        yAxisID: 'y-axis-2'
    }];
    $scope.options = {
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left'
            }, {
                id: 'y-axis-2',
                type: 'linear',
                display: true,
                position: 'right'
            }]
        }
    };*/

      

    $scope.labels1 = ['May 2017', 'June 2017', '2008', '2009', '2010', '2011', '2012'];
    $scope.series1 = ['Share'];

    $scope.data1 = [
                        [10, 20, 30, 40, 50, 60, 70]
                   ];




     $scope.labels2 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
     $scope.series2 = ['Musharakah Balance'];

    $scope.data2 = [
                     [28700000, 28600000, 28500000, 28400000, 28300000, 28200000, 28100000]
        
                   ];


    //pie chart

           var ctx = document.getElementById("myChart").getContext('2d');
              var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                  labels: [ "Your Share", "EFSOL Share"],
                  datasets: [{
                    backgroundColor: [
                     "#3498db",

                    ],
                    data: [12, 19]
                  }]
                }
              });


       //pie chart




                            
});