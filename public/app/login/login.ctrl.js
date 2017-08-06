(function() {
  'use strict';
  angular.module('loginApp')
    .controller('LoginRegisterCtrl', function($http, $mdToast) {
      var vm = this;
      vm.isRegistered = false;
      vm.txt = "Hello from LoginRegisterCtrl Controller";
      // $scope.txt = "Hello from LoginRegisterCtrl Controller";
      console.log('-- inside login ctrl');

      // DEBUG
        vm.isRegistered = true;
        vm.login = {
          email: "mijomog@yahoo.com"
        };

      vm.loginClick = function() {
        console.log('login', vm.login.email, vm.login.password);
        $http.post('/user/login', vm.login)
          .then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response.data);
            if (response.data.user) {
              console.log('logged in');
              window.location = '/profile';
            }
            if (response.data.error) {
              $mdToast.show(
                $mdToast.simple()
                .textContent(response.data.error)
                .position('bottom left')
                .hideDelay(15000)
                .theme("error-toast")
              );
              console.info('ng', response.data.error);
            }
            vm.data = response.data;
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
          });
      };
      vm.registerClick = function() {
        console.log(vm.register.email);
        // Check for duplicate email address
        $http.get('/user/email/' + vm.register.email)
          .then(function(response) {
            console.log(response.data);
            if (response.data) {
              $mdToast.show(
                $mdToast.simple()
                .textContent('An account with the ' + vm.register.email + ' already exists.')
                .position('bottom right')
                .hideDelay(15000)
                .theme("error-toast")
              );
            } else {
              $http.post('/user/register', vm.register)
                .then(function successCallback(response) {
                  console.log('done');
                  $mdToast.show(
                    $mdToast.simple()
                    .textContent("Your account has been created successfully. Please login to continue.")
                    .position('bottom right')
                    .hideDelay(15000)
                    .theme("success-toast")
                  );
                  vm.login.email = vm.register.email;
                  vm.register.name = '';
                  vm.register.email = '';
                  vm.register.password = '';
                  vm.login.password = '';
                  vm.isRegistered = true;
                  angular.element('#login-form-password').focus();
                }, function errorCallback(response) {
                  console.log('error');
                  $mdToast.show(
                    $mdToast.simple()
                    .textContent('Error occured : ' + response.data)
                    .position('bottom right')
                    .hideDelay(15000)
                    .theme("error-toast")
                  );
                });
            }
          });
      };
    });

}());
