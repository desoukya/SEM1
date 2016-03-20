/* Create Angular App Instance */
App = angular.module('SE_AIRLINES', ['ui.bootstrap', 'ngRoute']);

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

        // route for selected flights confirmation
        .when('/confirmFlight', {
            templateUrl : '/partials/confirmFlight.html',
            controller  : 'flightsCtrl'
        })

        // route for stripe payment
        .when('/payment', {
            templateUrl : '/partials/payment.html',
            controller  : 'flightsCtrl'
        });
});
