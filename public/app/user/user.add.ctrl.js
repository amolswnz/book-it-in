(function() {
  'use strict';
  angular.module('meanApp')
    .controller('UserAddCtrl', ['userService', '$location', '$routeParams', UserAddCtrl]);

  function UserAddCtrl(userService, $location, $routeParams) {
    var vm = this;

    vm.add = function() {
      console.log(vm);
      userService.addUser(vm.user).then(function(res) {
        console.log('adduser ', res);
        vm.user = res;
        if(res)
          toastr.success('The POST request is successful with message <br><em>' + res.message, 'POST done');
        else
          toastr.error('ERROR', 'There has been error, please check console.');
      });
    };
  }
}());
