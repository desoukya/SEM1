angular.module('SE_AIRLINES')

.controller('flightsCtrl', function($scope, FlightsSrv) {

  FlightsSrv.getFlightData(FlightsSrv.getSelectedOriginCity(),
                           FlightsSrv.getSelectedDestinationCity()
                           ).success(function(data) {
          $scope.flights = data;
  });

});
