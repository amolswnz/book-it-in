(function() {
  angular
    .module('activityApp')
    .service('ActivityService', ActivityService);

  ActivityService.$inject = ['$http', '$log'];

  function ActivityService($http, $log) {
    return {
      getCities: getCities,
      getActivities: getActivities,

      postBooking: postBooking
    };

    // Implementation

    function getCities() {
      return $http.get('/activity/cities')
        .then(getSuccess)
        .catch(getError);
    }

    function getActivities(city) {
      console.log('get activitys');
      return $http.get('/activity/city/' + city)
        .then(getSuccess)
        .catch(getError);
    }

    function postBooking(bookingData) {
      return $http.post('/booking/save/activity', bookingData)
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
