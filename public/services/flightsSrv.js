angular.module('SE_AIRLINES')
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
         getOriginAirports : function() {
           return $http.get('/api/cities/origin');
         },
         getDestinationAirports : function() {
           return $http.get('/api/cities/destination');
         },         
         getInboundFlightData : function(origin, dest) {
           return $http.get('/api/flights/search/' + origin + '/' + dest);
         },
         getOutboundFlightData : function(origin, dest) {
           return $http.get('/api/flights/search/' + origin + '/' + dest);
         }
     };
 });
