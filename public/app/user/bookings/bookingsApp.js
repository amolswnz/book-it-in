(function() {
  'use strict';
  angular.module('bookingsApp', ['ngResource', 'ngRoute', 'angular-loading-bar', 'ngMaterial', 'ngMessages'], function($mdThemingProvider) {
    var vrTheme = $mdThemingProvider.theme('vrTheme', 'default');
    var vrPalette = $mdThemingProvider.extendPalette('blue', {
      '500': '#b19259'
    });
    $mdThemingProvider.definePalette('vrPalette', vrPalette);
    vrTheme.primaryPalette('vrPalette');
  });

  angular.module('bookingsApp')
    .run(['$rootScope', '$location', '$routeParams', function($rootScope, $location, $routeParams) {
      $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        console.log('Current route name: ' + $location.path());
      });
    }])

    .config(function($routeProvider, $locationProvider) {
      // $locationProvider.html5Mode({
      //   enabled: true,
      //   requireBase: false
      // });

      // /partials = /public/app defined in express.js
      console.log('- inside angular module bookingsApp before routing');

      // Makes #! as #
      $locationProvider.hashPrefix("");
      $routeProvider
        .when('/', {
          templateUrl: '/partials/user/bookings/bookings-all',
          controller: 'BookingsCtrl',
          controllerAs: 'vm'
        })
        .when('/activity', {
          templateUrl: '/partials/user/bookings/bookings-activity',
          controller: 'BookingsCtrl',
          controllerAs: 'vm'
        })
        .when('/rentalcar', {
          templateUrl: '/partials/user/bookings/bookings-rentalcar',
          controller: 'BookingsCtrl',
          controllerAs: 'vm'
        })
        .when('/tour', {
          templateUrl: '/partials/user/bookings/bookings-tour',
          controller: 'BookingsCtrl',
          controllerAs: 'vm'
        })
        .when('/transfer', {
          templateUrl: '/partials/user/bookings/bookings-transfer',
          controller: 'BookingsCtrl',
          controllerAs: 'vm'
        });

    });
}());
