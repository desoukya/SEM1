angular.module('SE_AIRLINES')

.controller('flightsCtrl', function($scope, FlightsSrv) {

  /**
   * Outbound Flights
   */
  FlightsSrv.getOutboundFlightData(FlightsSrv.getSelectedOriginCity(),
                           FlightsSrv.getSelectedDestinationCity()
                           ).success(function(data) {
          console.log('angular data outbound => ', data);
          $scope.outBoundflights = data;
  });

  /**
   * Inbound Flights
   */
  FlightsSrv.getInboundFlightData(FlightsSrv.getSelectedDestinationCity(),
                           FlightsSrv.getSelectedOriginCity()
                           ).success(function(data) {
          console.log('angular data inbound => ', data);
          $scope.inBoundflights = data;
  });

});
