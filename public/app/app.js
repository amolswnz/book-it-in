(function() {
  'use strict';
  angular.module('bookitinApp', ['ngResource', 'ngRoute']);

  angular.module('bookitinApp')
    .config(function($routeProvider, $locationProvider) {
      // $locationProvider.html5Mode({
      //     enabled: true,
      //     requireBase: false
      // });

      // /partials = /public/app defined in express.js
      console.log('- inside angular module bookitinApp before routing');

      $locationProvider.hashPrefix(""); // Makes #! as #
      $routeProvider
        .when('/', {
          templateUrl: '/partials/main/main',
          controller: 'MainCtrl'
        })
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
