(function() {
  'use strict';
  angular.module('profileApp')
    .controller('ProfileCtrl', function($http, $mdToast) {
      var vm = this;
      vm.isRegistered = false;
      vm.txt = "Hello from ProfileCtrl Controller";
      // $scope.txt = "Hello from ProfileCtrl Controller";
      console.log('-- inside login ctrl');
    });
}());
