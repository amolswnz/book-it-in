(function() {
  'use strict';
  angular.module('bookitinApp')
    .controller('MainCtrl', function($scope, $http) {
      $scope.txt = "Hello from Angular Controller";

      $scope.getClass = function(path) {
        console.log($location.path().substr(0, path.length));
        // return ($location.path().substr(0, path.length) === path) ? 'current' : '';
      };
    });
}());
