(function() {
  'use strict';
  angular.module('tourApp', [ 'ngMaterial', 'ngMaterialDatePicker', 'ngMessages', 'ngRoute', 'angular-loading-bar', 'ngAnimate' ], function($mdThemingProvider) {
    var vrTheme = $mdThemingProvider.theme('vrTheme', 'default');
    var vrPalette = $mdThemingProvider.extendPalette('blue', {
      '500': '#b19259'
    });
    $mdThemingProvider.definePalette('vrPalette', vrPalette);
    vrTheme.primaryPalette('vrPalette');
  });

  angular.module('tourApp')
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
      console.log('- inside angular module tourApp before routing');

      // Makes #! as #
      $locationProvider.hashPrefix("");
      $routeProvider
        .when('/bookitin/tour', {
          templateUrl: '/partials/tour/view',
          controller: 'TourCtrl',
          controllerAs: 'vm'
        });
    });
}());
