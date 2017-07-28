(function() {
  'use strict';
  angular.module('activityApp', ['ngResource', 'ngRoute', 'angular-loading-bar']);

  angular.module('activityApp')
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
      console.log('- inside angular module activityApp before routing');

      // Makes #! as #
      $locationProvider.hashPrefix("");
      $routeProvider
        .when('/bookitin/activity', {
          templateUrl: '/partials/activity/view',
          controller: 'ActivityCtrl'
        });
    });
}());
