(function() {
  'use strict';
  angular.module('meanApp')
    .controller('AllUserCtrl', ['userService', '$location', '$routeParams', AllUserCtrl]);

  function AllUserCtrl(userService, $location, $routeParams) {
    var vm = this;

    userService.getUsers().then(function(res) {
      vm.allData = res;
    });
  }
}());
