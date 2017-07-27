(function() {

  angular.module('meanApp')
    .factory('userService', ['$http', userService]);

  function userService($http, $q, $log, $timeout) {
    return {
      getUsers: getUsers,
      getUser: getUser,
      updateUser: updateUser,
      addUser: addUser,
      deleteUser: deleteUser
    };

    function getUsers() {
      return $http.get('api/user').then(function(res) {
        return res.data;
      });
    }

    function getUser(id) {
      return $http.get('api/user/' + id).then(function(res) {
        return res.data;
      });
    }

    function deleteUser(id) {
      return $http.delete('api/user/' + id).then(function(res) {
        return res.data;
      });
    }

    function updateUser(id, data) {
      return $http.put('api/user/' + id, data).then(function(res) {
        return res.data;
      });
    }

    function addUser(data) {
      return $http.post('api/user/', data).then(function(res) {
        return res.data;
      });
    }
  }
}());
