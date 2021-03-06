var mod = angular.module("demo", []);


mod.controller("DemoController", function DemoController($scope, statesService) {
   $scope.query = {name: ""};
   $scope.sort = {predicate: "name", reverse: false};

   statesService.getAllStates().then(function (data) {
      $scope.data = data;
   });

   // if more control is required:
   /*
    statesService.getAllStates().then(function (data) {
    alert("Received Data!");
    }, function (reason) {
    alert("Received error: " + reason);
    }, function (update) {
    alert("Received progress update: " + update);
    })
    */
});
