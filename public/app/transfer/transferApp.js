(function() {
  'use strict';
  angular.module('transferApp', ['ngMaterial', 'ngMaterialDatePicker', 'ngMessages', 'ngRoute', 'angular-loading-bar', 'ngAnimate'], function($mdThemingProvider) {
    var vrTheme = $mdThemingProvider.theme('vrTheme', 'default');
    var vrPalette = $mdThemingProvider.extendPalette('blue', {
      '500': '#b19259'
    });
    $mdThemingProvider.definePalette('vrPalette', vrPalette);
    vrTheme.primaryPalette('vrPalette');
  });

  angular.module('transferApp')
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
      console.log('- inside angular module transferApp before routing');

      // Makes #! as #
      $locationProvider.hashPrefix("");
      $routeProvider
        .when('/bookitin/transfer', {
          templateUrl: '/partials/transfer/view',
          controller: 'TransferCtrl',
          controllerAs: 'vm'
        });
    });
}());
