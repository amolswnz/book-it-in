(function() {
  'use strict';
  angular.module('userApp', ['ngResource', 'ngRoute']);

  angular.module('userApp')
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
      console.log('- inside angular module userApp before routing');

      // Makes #! as #
      $locationProvider.hashPrefix("");
      $routeProvider
        .when('/login', {
          templateUrl: '/partials/user/login',
          controller: 'UserCtrl'
        });
      // .when('/home', {
      //   templateUrl: '/partials/main/home',
      //   controller: 'HomeCtrl'
      // })
      // .when('/user', {
      //   templateUrl: '/partials/user/user-all',
      //   controller: 'AllUserCtrl',
      //   controllerAs: 'users'
      // })
      // .when('/user/add', {
      //   templateUrl: '/partials/user/user-add',
      //   controller: 'UserAddCtrl',
      //   controllerAs: 'addCtrl'
      // })
      // .when('/user/:id', {
      //   templateUrl: '/partials/user/user-profile',
      //   controller: 'UserProfileCtrl',
      //   controllerAs: 'profileCtrl'
      // })
      // .when('/user/:id/edit', {
      //   templateUrl: '/partials/user/user-edit',
      //   controller: 'UserProfileCtrl',
      //   controllerAs: 'editCtrl'
      // })
      // .when('/user/:id/delete', {
      //   templateUrl: '/partials/user/user-delete',
      //   controller: 'UserProfileCtrl',
      //   controllerAs: 'vm'
      // });
    });
}());
