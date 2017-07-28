(function() {
  'use strict';
  angular.module('tourApp', ['ngResource', 'ngRoute', 'angular-loading-bar']);

  angular.module('tourApp')
    .run(['$rootScope', '$location', '$routeParams', function($rootScope, $location, $routeParams) {
      $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        console.log('Current route name: ' + $location.path());
        console.log($routeParams);
      });
    }])

    .config(function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      // $locationProvider.html5Mode(true);

      // /partials = /public/app defined in express.js
      console.log('- inside angular module tourApp before routing');

      // Makes #! as #
      $locationProvider.hashPrefix("");
      $routeProvider
        .when('/login', {
          templateUrl: '/partials/tour/index',
          controller: 'TourCtrl'
        });
    });
}());
