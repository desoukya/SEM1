/**
 * Main Controller
 */
App.controller('mainCtrl', function($scope, FlightsSrv, $location) {

    /* Initialize Scope Variables */
    $scope.selectedOriginAirport       = 'From';
    $scope.selectedDestinationAirport  = 'To';

    $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii",
    "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota",
    "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
    "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin",
    "Wyoming"];

    $scope.selected = undefined;

    /* Retrieve List of Oirign Airports */
    function originAirports() {
      FlightsSrv.getOriginAirports().success(function(airports) {
           $scope.originAirports = airports;
       });
    };

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
