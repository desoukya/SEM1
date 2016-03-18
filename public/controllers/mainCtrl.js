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

    $scope.SetOriginAirport = function(newAirport) {
      $scope.selectedOriginAirport = newAirport;
      FlightsSrv.setSelectedOriginAirport(newAirport);
    };

    $scope.SetDestinationAirport = function(newAirport) {
      $scope.selectedDestinationAirport = newAirport;
      FlightsSrv.setSelectedDestinationAirport(newAirport);
    };

    $scope.SearchFlights = function() {
      $location.url('/outFlights');
    };

    originAirports();
    destinationAirports();

});
