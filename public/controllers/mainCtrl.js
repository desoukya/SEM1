angular.module('SE_AIRLINES')

.controller('mainCtrl', function($scope, FlightsSrv, $location) {

    $scope.selectedOriginCity       = 'From';
    $scope.selectedDestinationCity  = 'To';

    function originCities() {
      FlightsSrv.getOriginCities().success(function(cities){
           $scope.originCities = cities;
       });
    };

    function destinationCities() {
      FlightsSrv.getDestinationCities().success(function(cities){
           $scope.destinationCities = cities;
       });
    };

    $scope.SetOriginCity = function( newCity ) {
      $scope.selectedOriginCity = newCity;
      FlightsSrv.setSelectedOriginCity(newCity);
    };

    $scope.SetDestinationCity = function( newCity ) {
      $scope.selectedDestinationCity = newCity;
      FlightsSrv.setSelectedDestinationCity(newCity);
    };

    $scope.SearchFlights = function() {
      $location.url('/flights');
    };

    originCities();
    destinationCities();

});
