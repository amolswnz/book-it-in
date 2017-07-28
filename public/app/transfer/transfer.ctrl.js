(function() {
  'use strict';
  angular.module('transferApp')
    .controller('TransferCtrl', function($scope) {
      $scope.txt = "Hello from transfer Controller";
      console.log('test');
    });

}());
