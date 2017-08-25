(function() {
  angular
    .module('bookingsApp')
    .service('ActivityBookingsService', ActivityBookingsService);

  ActivityBookingsService.$inject = ['$http', '$log'];

  function ActivityBookingsService($http, $log) {
    return {
      getBookings: getBookings,
      getDetail: getDetail,
      getActivity: getActivity,
      cancelBooking: cancelBooking
    };

    // Implementation
    function getBookings() {
      return $http.get('/bookings/activity')
        .then(getSuccess)
        .catch(getError);
    }

    function getDetail(id) {
      return $http.get('/bookings/activity/' + id)
        .then(getSuccess)
        .catch(getError);
    }

    function getActivity(id) {
      return $http.get('/activity/' + id)
        .then(getSuccess)
        .catch(getError);
    }

    function cancelBooking(id) {
      return $http.delete('/bookings/activity/' + id)
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
