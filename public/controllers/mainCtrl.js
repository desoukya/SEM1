angular.module('SE_AIRLINES')

.controller('mainCtrl', function($scope, FlightsSrv, $location) {

    $scope.selectedOriginAirport       = 'From';
    $scope.selectedDestinationAirport  = 'To';

    function originAirports() {
      FlightsSrv.getOriginAirports().success(function(airports) {
           $scope.originAirports = airports;
       });
    };

    // function destinationAirports() {
    //   FlightsSrv.getDestinationAirports().success(function(airports) {
    //        $scope.destinationAirports = airports;
    //    });
    // };

    $scope.SetOriginAirport = function(originAirport) {
      $scope.selectedOriginAirport = originAirport;
      FlightsSrv.setSelectedOriginAirport(originAirport);

      /* get destination airports based on selected origin */
      FlightsSrv.getDestinationAirports(originAirport)
        .success(function(airports) {
           console.log('getDestinationAirports => ', airports);
           $scope.destinationAirports = airports;
       });

    };

    $scope.SetDestinationAirport = function(destAirport) {
      $scope.selectedDestinationAirport = destAirport;
      FlightsSrv.setSelectedDestinationAirport(destAirport);
    };

    $scope.SearchFlights = function() {
      $location.url('/outFlights');
    };

    originAirports();
    // destinationAirports();

});
