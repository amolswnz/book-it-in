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
      console.log('inside service');
      return $http.get('/activity/cities')
        .then(getSuccess)
        .catch(getError);
    }

    function getActivities(city) {
      return $http.get('/activity/city/' + city)
        .then(getSuccess)
        .catch(getError);
    }

    function postBooking(bookingData) {
      return $http.post('/booking/activity', bookingData)
        .then(getSuccess)
        .catch(getError);
    }

    function getSuccess(res) {
      console.log('success res', res);
      return res.data;
    }

    function getError(err) {
      $log.error('XHR Failed for getAvengers.' + err.data);
    }

  }
}());
