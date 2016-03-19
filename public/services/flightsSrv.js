/* Require Angular App Instance */
angular.module('SE_AIRLINES')

/**
 * Flights Service
 */
.factory('FlightsSrv', function ($http) {
     return {
         getSelectedOriginAirport: function () {
           return this.originAirport;
         },
         setSelectedOriginAirport: function(value) {
           this.originAirport = value;
         },
         getSelectedDestinationAirport: function () {
           return this.destinationAirport;
         },
         setSelectedDestinationAirport: function(value) {
           this.destinationAirport = value;
         },
         getSelectedInboundFlight: function () {
           return this.inboundFlight;
         },
         setSelectedInboundFlight: function(value) {
           this.inboundFlight = value;
         },
         getSelectedOutboundFlight: function () {
           return this.outboundFlight;
         },
         setSelectedOutboundFlight: function(value) {
           this.outboundFlight = value;
         },
         getOriginAirports : function() {
           return $http.get('/api/airports/origin');
         },
         getDestinationAirports : function(originAirport) {
           return $http.get('/api/airports/destination/' + originAirport);
         },
         getInboundFlightData : function(origin, dest) {
           return $http.get('/api/flights/search/' + origin + '/' + dest);
         },
         getOutboundFlightData : function(origin, dest) {
           return $http.get('/api/flights/search/' + origin + '/' + dest);
         }
     };
 });
