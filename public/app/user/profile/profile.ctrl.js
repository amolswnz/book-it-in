(function() {
  'use strict';
  angular
    .module('profileApp')
    .controller('ProfileCtrl', ProfileCtrl);

  ProfileCtrl.$inject = ['ProfileService', '$log', '$mdToast'];

  function ProfileCtrl(ProfileService, $log, $mdToast) {
    var vm = this;
    console.log('inseide profile');

    activate();

    function activate() {
      return getProfile().then(function() {
        $log.info('Activated Avengers View');
      });
    }

    function getProfile() {
      return ProfileService.getProfile()
        .then(function(data) {
          vm.profile = data;
        });
    }

    vm.updateProfile = function() {
      delete vm.profile.password;
      return ProfileService.updateProfile(vm.profile)
        .then(function(data) {
          var msgTheme = data.success ? 'success-toast' : 'error-toast';
          $mdToast.show(
            $mdToast.simple()
            .textContent(data.msg)
            .position('bottom right')
              .hideDelay(4000)
              .parent($("#toast-container"))
              .theme(msgTheme)
          );
        }).catch(function(err) {
          console.log('err', err);
        });
    };

    vm.updatePassword = function() {
      var patchData = {
        email: vm.profile.email,
        old: vm.pwd.pwd,
        new: vm.pwd.newpwd
      };
      console.log(patchData);
      return ProfileService.updatePwd(patchData)
        .then(function(data) {
          console.log(data);
          var msgTheme = data.success ? 'success-toast' : 'error-toast';
          $mdToast.show(
            $mdToast.simple()
            .textContent(data.msg)
            .position('bottom right')
              .hideDelay(4000)
              .parent($("#toast-container"))
              .theme(msgTheme)
          );
          vm.pwd =  {};
        }).catch(function(err) {
          console.log('err', err);
        });
    };

  }
}());

// https://stackoverflow.com/questions/12592472/how-to-highlight-a-current-menu-item
