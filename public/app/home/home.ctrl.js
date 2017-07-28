(function() {
  'use strict';
  angular.module('homeApp')
    .controller('HomeCtrl', function($scope) {
      console.log('home controller');
      $scope.txt = "Hello from Home Controller";
    });

}());
