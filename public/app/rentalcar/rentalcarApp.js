(function() {
  'use strict';
  angular.module('rentalcarApp', ['ngResource', 'ngRoute', 'angular-loading-bar']);

  angular.module('rentalcarApp')
    .run(['$rootScope', '$location', '$routeParams', function($rootScope, $location, $routeParams) {
      $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        console.log('Current route name: ' + $location.path());
      });
    }])

    .config(function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      // /partials = /public/app defined in express.js
      console.log('- inside angular module rentalcarApp before routing');

      // Makes #! as #
      $locationProvider.hashPrefix("");
      $routeProvider
        .when('/bookitin/rentalcar', {
          templateUrl: '/partials/rentalcar/view',
          controller: 'RentalcarCtrl'
        });
    });
}());
