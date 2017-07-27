(function() {
  'use strict';
  angular.module('meanApp')
    .controller('UserProfileCtrl', ['userService', '$location', '$routeParams', UserProfileCtrl]);

  function UserProfileCtrl(userService, $location, $routeParams) {
    var vm = this;

    userService.getUser($routeParams.id).then(function(res) {
      console.log('getUser single s', res);
      vm.user = res;
      console.log(vm);
    });

    vm.update = function() {
      userService.updateUser($routeParams.id, vm.user).then(function(res) {
        console.log('getUser', res);
        if (res)
          $location.path('/');
          // toastr.success('The PUT request is successful with message <br><em>' + res.message, 'PUT done',
          //   { onHidden: function() {
          //       console.log("Toastr hide", '//user/' + $routeParams.id);
          //     }
          //   }
          // );
        else
          toastr.error('ERROR', 'There has been error, please check console.');
      });
    };

    vm.delete = function() {
      userService.deleteUser($routeParams.id).then(function(res) {
        console.log('delete', res);
        if (res)
          toastr.success('The DELETE request is successful with message <br><em>' + res.message, 'DELETE done');
        else
          toastr.error('ERROR', 'There has been error, please check console.');
      });
    };
  }
}());
