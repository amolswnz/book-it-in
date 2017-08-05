(function() {
  'use strict';
  angular.module('userApp')
    .controller('LoginRegisterCtrl', function($http) {
      var vm = this;
      vm.txt = "Hello from LoginRegisterCtrl Controller";
      vm.asdklfj = "adsf";
      // $scope.txt = "Hello from LoginRegisterCtrl Controller";
      console.log('-- inside user ctrl');


      vm.loginClick = function() {
        console.log('login', vm.login.email, vm.login.password);
        $http.post('/user/login', vm.login)
          .then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response.data);
            vm.data = response.data;
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
          });
      };
      vm.registerClick = function() {
        $http.post('/user/register', vm.register)
          .then(function successCallback(response) {
            console.log(response.data);
            vm.data = response.data;
          }, function errorCallback(response) {
            console.log(response);
          });
      };
    });

}());
