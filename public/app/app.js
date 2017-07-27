(function() {
  'use strict';
  angular.module('meanApp', ['ngResource', 'ngRoute']);

  angular.module('meanApp')
    .config(function($routeProvider, $locationProvider) {
      // $locationProvider.html5Mode({
      //     enabled: true,
      //     requireBase: false
      // });
      $locationProvider.hashPrefix("");
      $routeProvider
        .when('/', {
          templateUrl: '/partials/main/main',
          controller: 'MainCtrl'
        })
        .when('/home', {
          templateUrl: '/partials/main/home',
          controller: 'HomeCtrl'
        })
        .when('/user', {
          templateUrl: '/partials/user/user-all',
          controller: 'AllUserCtrl',
          controllerAs: 'users'
        })
        .when('/user/add', {
          templateUrl: '/partials/user/user-add',
          controller: 'UserAddCtrl',
          controllerAs: 'addCtrl'
        })
        .when('/user/:id', {
          templateUrl: '/partials/user/user-profile',
          controller: 'UserProfileCtrl',
          controllerAs: 'profileCtrl'
        })
        .when('/user/:id/edit', {
          templateUrl: '/partials/user/user-edit',
          controller: 'UserProfileCtrl',
          controllerAs: 'editCtrl'
        })
        .when('/user/:id/delete', {
          templateUrl: '/partials/user/user-delete',
          controller: 'UserProfileCtrl',
          controllerAs: 'vm'
        });
    });
}());
