(function() {
  'use strict';
  angular.module('activityApp')
    .controller('ActivityCtrl', function($scope) {
      $scope.txt = "Hello from activity Controller";
      console.log('-- inside activity ctrl');
    });

}());
