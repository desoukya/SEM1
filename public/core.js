var App = angular.module('SE_AIRLINES', ['ngRoute']);

// configure routes
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
          });
  });
