(function() {
  'use strict';
  angular.module('bookitinApp')
    .controller('HomeCtrl', function($scope) {
      console.log('home controller');
      $scope.txt = "Hello from Home Controller";
    });

}());
