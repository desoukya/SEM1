angular.module('SE_AIRLINES')
.factory('FlightsSrv', function ($http) {
     return {
         getSelectedOriginCity: function () {
           return this.originCity;
         },
         setSelectedOriginCity: function(value) {
           this.originCity = value;
         },
         getSelectedDestinationCity: function () {
           return this.destiantionCity;
         },
         setSelectedDestinationCity: function(value) {
           this.destiantionCity = value;
         },
         getFlightData : function(origin, dest) {
           return $http.get('/api/flights/' + origin + '/' + dest);
         },
         getOriginCities : function() {
           return $http.get('/api/cities/origin');
         },
         getDestinationCities : function() {
           return $http.get('/api/cities/destination');
         }
     };
 });
