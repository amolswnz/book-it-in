(function() {
  'use strict';
  angular.module('userApp', ['ngResource', 'ngRoute', 'angular-loading-bar']);

  angular.module('userApp')
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
      console.log('- inside angular module userApp before routing');

      // Makes #! as #
      $locationProvider.hashPrefix("");
      $routeProvider
        .when('/login', {
          templateUrl: '/partials/user/login',
          controller: 'UserCtrl'
        });
    });
}());
