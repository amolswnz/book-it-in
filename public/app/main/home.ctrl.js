(function() {
  'use strict';
  angular.module('bookitinApp')
    .controller('HomeCtrl', function($scope) {
      $scope.txt = "Hello from Home Controller";
      $scope.getClass = function(path) {
        console.log($location.path().substr(0, path.length));
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
      };
    });

}());
