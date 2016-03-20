/**
 * Main Controller
 */
App.controller('mainCtrl', function($scope, FlightsSrv, $location) {

    /* Initialize Scope Variables */
    $scope.selectedOrigin = undefined;

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
      $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
      opened: false
    };

    $scope.popup2 = {
      opened: false
    };    

    /* Retrieve List of Oirign Airports */
    function originAirports() {
      FlightsSrv.getOriginAirports().success(function(airports) {
           $scope.originAirports = airports;
       });
    };

    /* Record User's Selected Origin Airport  */
    $scope.SetOriginAirport = function(originAirport) {
      FlightsSrv.setSelectedOriginAirport(originAirport);

      /* get destination airports based on selected origin */
      FlightsSrv.getDestinationAirports(originAirport)
        .success(function(airports) {
           $scope.destinationAirports = airports;
       });
    };

    /* Record User's Selected Destination Airport  */
    $scope.SetDestinationAirport = function(destAirport) {
      FlightsSrv.setSelectedDestinationAirport(destAirport);
    };

    /* Find All Available Flights  */
    $scope.SearchFlights = function() {
      $location.url('/outFlights');
    };

    /* Get Airports on page render  */
    originAirports();

});
