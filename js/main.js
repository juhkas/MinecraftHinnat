var minecraftpricesApp = angular.module("minecraftprices", []);

minecraftpricesApp.controller("hinnat", function ($scope, $http) {
  $http.get("items.json").then(function(response) {
      $scope.hinnat = response.data.records;
  });
});