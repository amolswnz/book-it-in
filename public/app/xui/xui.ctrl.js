(function() {
  'use strict';
  angular.module('xUiApp')
    .controller('xUiCtrl', function($scope) {
      $scope.txt = "Hello from xUiCtrl Controller";
      console.log('-- inside xUiCtrl ctrl');
    });

}());
