(function() {
  'use strict';
  angular.module('profileApp', ['ngResource', 'ngRoute', 'angular-loading-bar', 'ngMaterial', 'ngMessages'], function($mdThemingProvider) {
    var vrTheme = $mdThemingProvider.theme('vrTheme', 'default');
    var vrPalette = $mdThemingProvider.extendPalette('blue', {
      '500': '#b19259'
    });
    $mdThemingProvider.definePalette('vrPalette', vrPalette);
    vrTheme.primaryPalette('vrPalette');
  });

  angular.module('profileApp')
    .run(['$rootScope', '$location', '$routeParams', function($rootScope, $location, $routeParams) {
      $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        console.log('Current route name: ' + $location.path());
      });
    }])

    .config(function($routeProvider, $locationProvider) {
      // Multiple routes hence disabled
      // $locationProvider.html5Mode({
      //   enabled: true,
      //   requireBase: false
      // });

      // /partials = /public/app defined in express.js
      console.log('- inside angular module profileApp before routing');

      // Makes #! as #
      $locationProvider.hashPrefix("");
      $routeProvider
        .when('/', {
          templateUrl: '/partials/user/profile/profile-view',
          controller: 'ProfileCtrl',
          controllerAs: 'vm'
        })
        .when('/update', {
          templateUrl: '/partials/user/profile/profile-update',
          controller: 'ProfileCtrl',
          controllerAs: 'vm'
        })
        .when('/pwd', {
          templateUrl: '/partials/user/profile/change-pwd',
          controller: 'ProfileCtrl',
          controllerAs: 'vm'
        });
    });
}());
