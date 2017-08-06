(function() {
  'use strict';
  angular.module('bookingsApp')
    .controller('BookingsCtrl', function($http, $mdToast) {
      var vm = this;
      vm.isRegistered = false;
      vm.txt = "Hello from BookingsCtrl Controller";
      // $scope.txt = "Hello from BookingsCtrl Controller";
      console.log('-- inside login ctrl');
    });
}());
