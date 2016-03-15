angular.module('SE_AIRLINES')

.controller('flightsCtrl', function($scope, FlightsSrv) {
  alert(FlightsSrv.getSelectedOriginCity());
  alert(FlightsSrv.getSelectedDestinationCity());
  FlightsSrv.getFlightData(FlightsSrv.getSelectedOriginCity(), FlightsSrv.getSelectedDestinationCity()).success(function(data) {
      $scope.flights = data;
  });

});
