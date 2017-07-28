(function() {
  'use strict';
  angular.module('userApp')
    .controller('UserCtrl', function($scope) {
      $scope.txt = "Hello from User Controller";
      console.log('-- inside user ctrl');
    });

}());
