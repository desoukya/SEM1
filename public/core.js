/* Create Angular App Instance */
var App = angular.module('SE_AIRLINES', ['ngRoute']);

/**
 * Angular Routes
 */
App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/partials/main.html',
            controller  : 'mainCtrl'
        })

        // route for outbound flights
        .when('/outFlights', {
            templateUrl : '/partials/outFlights.html',
            controller  : 'flightsCtrl'
        })

        // route for inbound flights
        .when('/inFlights', {
            templateUrl : '/partials/inFlights.html',
            controller  : 'flightsCtrl'
        })

        // route for outbound flights
        .when('/confirmFlight', {
            templateUrl : '/partials/confirmFlight.html',
            controller  : 'flightsCtrl'
        });
});
