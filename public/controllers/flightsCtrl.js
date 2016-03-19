/* Require Angular App Instance */
angular.module('SE_AIRLINES')

/**
 * Flights Controller
 */
.controller('flightsCtrl', function($scope, FlightsSrv) {

   /* Initialize Scope Variables */
   $scope.selectedOutboundFlight  = FlightsSrv.getSelectedOutboundFlight();
   $scope.selectedInboundFlight   = FlightsSrv.getSelectedInboundFlight();


   /* Outbound Flights */
  FlightsSrv.getOutboundFlightData(FlightsSrv.getSelectedOriginAirport(),
                                   FlightsSrv.getSelectedDestinationAirport()
                                  ).success(function(data) {
          $scope.outBoundflights = data;
  });

   /* Inbound Flights */
  FlightsSrv.getInboundFlightData(FlightsSrv.getSelectedDestinationAirport(),
                                  FlightsSrv.getSelectedOriginAirport()
                                  ).success(function(data) {
          $scope.inBoundflights = data;
  });

  /* Set Selected Outbound Flight */
  $scope.SetOutboundFlight = function(flight) {
    FlightsSrv.setSelectedOutboundFlight(flight);
  };

  /* Set Selected Inbound Flight */
  $scope.SetInboundFlight = function(flight) {
    FlightsSrv.setSelectedInboundFlight(flight);
  };


});
