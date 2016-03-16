angular.module('SE_AIRLINES')

.controller('mainCtrl', function($scope, FlightsSrv, $location) {
    $scope.cities                   = ['Atlanta', 'Dubai', 'New York'];
    $scope.selectedOriginCity       = 'From';
    $scope.selectedDestinationCity  = 'To';

    $scope.SetOriginCity = function( newCity ) {
      $scope.selectedOriginCity = newCity;
      FlightsSrv.setSelectedOriginCity(newCity);
    };

    $scope.SetDestinationCity = function( newCity ) {
      $scope.selectedDestinationCity = newCity;
      FlightsSrv.setSelectedDestinationCity(newCity);
    };

    $scope.SearchFlights = function() {
      alert("Hello from Angular - searching for flights from " + FlightsSrv.getSelectedOriginCity() + " to " + FlightsSrv.getSelectedDestinationCity());
      $location.url('/flights');
    };

});
