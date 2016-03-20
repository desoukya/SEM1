/**
 * Main Controller
 */
App.controller('mainCtrl', function($scope, FlightsSrv, $location) {

    /* Initialize Scope Variables */
    $scope.selectedOriginAirport       = 'From';
    $scope.selectedDestinationAirport  = 'To';

    $scope.selected = undefined;

    /* Retrieve List of Oirign Airports */
    function originAirports() {
      FlightsSrv.getOriginAirports().success(function(airports) {
           $scope.originAirports = airports;
       });
    };

    $scope.$watch('selected', function() {
      console.log("thanks for picking an airport!");
    });

    /* Record User's Selected Origin Airport  */
    $scope.SetOriginAirport = function(originAirport) {
      $scope.selectedOriginAirport = originAirport;
      FlightsSrv.setSelectedOriginAirport(originAirport);

      /* get destination airports based on selected origin */
      FlightsSrv.getDestinationAirports(originAirport)
        .success(function(airports) {
           $scope.destinationAirports = airports;
       });
    };

    /* Record User's Selected Destination Airport  */
    $scope.SetDestinationAirport = function(destAirport) {
      $scope.selectedDestinationAirport = destAirport;
      FlightsSrv.setSelectedDestinationAirport(destAirport);
    };

    /* Find All Available Flights  */
    $scope.SearchFlights = function() {
      $location.url('/outFlights');
    };

    /* Get Airports on page render  */
    originAirports();

});
