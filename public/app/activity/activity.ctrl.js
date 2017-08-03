(function() {
  'use strict';
  angular.module('activityApp')

    // .factory('Activity', ['$http', function($http) {
    //   return {
    //     get: function() {
    //       var d = $http.get('/activity');
    //       console.log(d);
    //       return d;
    //     }
    //   };
    // }])
    //
    .controller('ActivityCtrl', function($scope, $http) {
      var vm = this;
      vm.txt = "Hello from activity Controller";
      console.log('-- inside activity ctrl');
      // var d = $http.get('/activity');
      // console.log(d.data);
      $http.get('/activity')
        .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response.data);
          vm.title = "Title";
          vm.data = response.data;
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log(response);
        });
    });
}());
