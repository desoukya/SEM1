angular.module('SE_AIRLINES')

.controller('mainCtrl', function($scope, FlightsSrv, $location) {

    $scope.selectedOriginAirport       = 'From';
    $scope.selectedDestinationAirport  = 'To';

    function originAirports() {
      FlightsSrv.getOriginAirports().success(function(airports) {
           $scope.originAirports = airports;
       });
    };

    function destinationAirports() {
      FlightsSrv.getDestinationAirports().success(function(airports) {
           $scope.destinationAirports = airports;
       });
    };

    $scope.SetOriginAirport = function(newCity) {
      $scope.selectedOriginAirport = newCity;
      FlightsSrv.setSelectedOriginAirport(newCity);
    };

    $scope.SetDestinationAirport = function(newCity) {
      $scope.selectedDestinationAirport = newCity;
      FlightsSrv.setSelectedDestinationAirport(newCity);
    };

    $scope.SearchFlights = function() {
      $location.url('/flights');
    };

    originAirports();
    destinationAirports();

});
