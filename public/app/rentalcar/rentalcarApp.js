(function() {
  'use strict';
  angular.module("rentalcarApp", ['ngMaterial', 'ngMaterialDatePicker', 'ngMessages', 'ngRoute', 'angular-loading-bar'], function($mdThemingProvider) {
    var vrTheme = $mdThemingProvider.theme('vrTheme', 'default');
    var vrPalette = $mdThemingProvider.extendPalette('blue', {
      '500': '#b19259'
    });
    $mdThemingProvider.definePalette('vrPalette', vrPalette);
    vrTheme.primaryPalette('vrPalette');
  });

  angular.module('rentalcarApp')
    .run(['$rootScope', '$location', '$routeParams', function($rootScope, $location, $routeParams) {
      $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        console.log('Current route name: ' + $location.path());
      });
    }])

    .config(function($routeProvider, $locationProvider) {
      // Makes #! as #
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      $locationProvider.hashPrefix("");

      console.log('- inside angular module rentalcarApp before routing');

      // /partials = /public/app defined in express.js
      $routeProvider
        .when('/bookitin/rentalcar', {
          templateUrl: '/partials/rentalcar/view',
          controller: 'RentalcarCtrl',
          controllerAs: 'vm'
        });
    });
}());
