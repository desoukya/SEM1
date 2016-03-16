var App = angular.module('SE_AIRLINES', ['ngRoute']);

// configure routes
  App.config(function($routeProvider) {
      $routeProvider

          // route for the home page
          .when('/', {
              templateUrl : 'main.html',
              controller  : 'mainCtrl'
          })

          // route for the contact page
          .when('/flights', {
              templateUrl : 'flights.html',
              controller  : 'flightsCtrl'
          });
  });
