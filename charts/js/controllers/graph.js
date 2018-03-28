lineChart.controller("graph", function($scope,$http) {


    //json api

    /*$http.get("../json/80229_Ledger.json")
    .then(function(response) {
        $scope.graphData = response.data;
    });*/

    //json api
        $.getJSON('../json/80229_Ledger.json', function(result) {
      
           

       var labels = result.map(function(e) {
             return e.Date;
          }),
          source1 = result.map(function(e) {
            return e.beg_balance;             
          }),
          
          source3 = result.map(function(e) {
             return e.Deposit;
          });

       var ctx = document.getElementById("myChart").getContext("2d");
       var myChart = new Chart(ctx, {
          type: 'line',
          data: {
             labels: labels,
             datasets: [{
                label: "Deposit",
                data: source3,
                borderWidth: 2,
                backgroundColor: "rgba(6, 167, 125, 0.1)",
                borderColor: "rgba(6, 167, 125, 1)",
                pointBackgroundColor: "rgba(225, 225, 225, 1)",
                pointBorderColor: "rgba(6, 167, 125, 1)",
                pointHoverBackgroundColor: "rgba(6, 167, 125, 1)",
                pointHoverBorderColor: "#fff"
             },{
                label: "Balance",
                data: source1,
                borderWidth: 2,
                backgroundColor: "rgba(26, 143, 227, 0.1)",
                borderColor: "rgba(26, 143, 227, 1)",
                pointBackgroundColor: "rgba(225, 225, 225, 1)",
                pointBorderColor: "rgba(26, 143, 227, 1)",
                pointHoverBackgroundColor: "rgba(26, 143, 227, 1)",
                pointHoverBorderColor: "#fff"
             }]
          }
       });
    }); //json api


         //json api
        $.getJSON('..///json/80229_Ledger.json', function(result) {
      
           

       var labels = result.map(function(e) {
             return e.Date;
          }),
          source1 = result.map(function(e) {
             return e.Deposit;
          });

       var ctx = document.getElementById("myChart1").getContext("2d");
       var myChart1 = new Chart(ctx, {
          type: 'line',
          data: {
             labels: labels,
             datasets: [{
                label: "Deposit",
                data: source1,
                borderWidth: 2,
                backgroundColor: "rgba(6, 167, 125, 0.1)",
                borderColor: "rgba(6, 167, 125, 1)",
                pointBackgroundColor: "rgba(225, 225, 225, 1)",
                pointBorderColor: "rgba(6, 167, 125, 1)",
                pointHoverBackgroundColor: "rgba(6, 167, 125, 1)",
                pointHoverBorderColor: "#fff"
             }
             ]
          }
       });
    });//json api


         //pie chart


        $.getJSON('..///json/80229_Ledger.json', function(result) {
      
           

           source1 = result.map(function(e) {
             return e.Deposit;
          }),
           source3 = result.map(function(e) {
             return e.beg_balance;
          });

           var ctx = document.getElementById("myChartpie").getContext('2d');
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
    });

           


       //pie chart

      




         //json api
        $.getJSON('..///json/80229_Ledger.json', function(result) {
      
           

       var labels = result.map(function(e) {
             return e.Date;
          }),
           source3 = result.map(function(e) {
             return e.beg_balance;
          });

       var ctx = document.getElementById("myChart4").getContext("2d");
       var myChart4 = new Chart(ctx, {
          type: 'line',
          data: {
             labels: labels,
             datasets: [{
                      label: "Balance",
                      data: source3,
                      borderWidth: 2,
                      backgroundColor: "rgba(26, 143, 227, 0.1)",
                      borderColor: "rgba(26, 143, 227, 1)",
                      pointBackgroundColor: "rgba(225, 225, 225, 1)",
                      pointBorderColor: "rgba(26, 143, 227, 1)",
                      pointHoverBackgroundColor: "rgba(26, 143, 227, 1)",
                      pointHoverBorderColor: "#fff"
                   }
             ]
          }
       });
    });//json api
         
    




                            
});//end of controller






/*
  //pie

         $.getJSON('..///json/80229_Ledger.json', function(result) {

          
          //console.log(result.sum("Deposit"))
          console.log(result.sum("beg_balance"))
      
           

             var labels = result.map(function(e) {
                   return e.Date;
                }),
                source1 = result.map(function(e) {
                   return e.Deposit;
              

                }),
                
                source3 = result.map(function(e) {
                   return e.beg_balance;
                  
                });

             var ctx = document.getElementById("myChartpie").getContext("2d");
             var myChartpie = new Chart(ctx, {
                type: 'pie',
                data: {
                   labels: labels,
                   datasets: [{
                      label: "Deposit",
                      data: source1,
                      borderWidth: 2,
                      backgroundColor: "rgba(6, 167, 125, 0.1)",
                      borderColor: "rgba(6, 167, 125, 1)",
                      pointBackgroundColor: "rgba(225, 225, 225, 1)",
                      pointBorderColor: "rgba(6, 167, 125, 1)",
                      pointHoverBackgroundColor: "rgba(6, 167, 125, 1)",
                      pointHoverBorderColor: "#fff"
                   },{
                      label: "Balance",
                      data: source3,
                      borderWidth: 2,
                      backgroundColor: "rgba(26, 143, 227, 0.1)",
                      borderColor: "rgba(26, 143, 227, 1)",
                      pointBackgroundColor: "rgba(225, 225, 225, 1)",
                      pointBorderColor: "rgba(26, 143, 227, 1)",
                      pointHoverBackgroundColor: "rgba(26, 143, 227, 1)",
                      pointHoverBorderColor: "#fff"
                   }]
                }
             });
          }); 

        //end pie*/