(function() {
  'use strict';
  angular.module('tourApp')
    .controller('TourCtrl', function($scope) {
      $scope.txt = "Hello from tour Controller";
      console.log('test');
    });

}());
