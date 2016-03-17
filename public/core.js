var App = angular.module('SE_AIRLINES', ['ngRoute']);

// configure routes
  App.config(function($routeProvider) {
      $routeProvider

          // route for the home page
          .when('/', {
              templateUrl : '/partials/main.html',
              controller  : 'mainCtrl'
          })

          // route for the contact page
          .when('/flights', {
              templateUrl : '/partials/flights.html',
              controller  : 'flightsCtrl'
          });
  });
