var minecraftpricesApp = angular.module("minecraftprices", []);

minecraftpricesApp.controller("hinnat", function ($scope, $http) {
  $http.get("items.json").then(function(response) {
      $scope.hinnat = response.data.records;
  });
  
  $scope.propertyName = 'id';
  $scope.reverse = false;
 
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
});