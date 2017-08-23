(function() {
  angular
    .module('profileApp')
    .service('ProfileService', ProfileService);

  ProfileService.$inject = ['$http', '$log'];

  function ProfileService($http, $log) {
    return {
      getProfile: getProfile,
      updateProfile: updateProfile,
      updatePwd: updatePwd
    };

    // Implementation
    function getProfile() {
      return $http.get('/user/profile/current')
        .then(getSuccess)
        .catch(getError);
    }

    function updateProfile(profileData) {
      return $http.put('/user/profile/current', profileData)
        .then(getSuccess)
        .catch(getError);
    }

    function updatePwd(patchData) {
      return $http.patch('/user/profile/current', patchData)
        .then(getSuccess)
        .catch(getError);
    }


    function getSuccess(res) {
      return res.data;
    }

    function getError(err) {
      $log.error('XHR Failed for getAvengers.' + err.data);
    }

  }
}());
