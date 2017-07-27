(function() {
  'use strict';
  angular.module('bookitinApp')
    .controller('UserCtrl', function($scope) {
      $scope.txt = "Hello from User Controller";
      console.log('test');
    });

}());
