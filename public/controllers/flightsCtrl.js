/* require angular app instance */
angular.module('SE_AIRLINES')

/* flights controller */
.controller('flightsCtrl', function($scope, FlightsSrv) {

  /**
   * Outbound Flights
   */
  FlightsSrv.getOutboundFlightData(FlightsSrv.getSelectedOriginAirport(),
                                   FlightsSrv.getSelectedDestinationAirport()
                                  ).success(function(data) {
          console.log('angular data outbound => ', data);
          $scope.outBoundflights = data;
  });

  /**
   * Inbound Flights
   */
  FlightsSrv.getInboundFlightData(FlightsSrv.getSelectedDestinationAirport(),
                                  FlightsSrv.getSelectedOriginAirport()
                                  ).success(function(data) {
          console.log('angular data inbound => ', data);
          $scope.inBoundflights = data;
  });

});
