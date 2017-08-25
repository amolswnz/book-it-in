(function() {
  angular
    .module('bookingsApp')
    .service('TourBookingsService', TourBookingsService);

  TourBookingsService.$inject = ['$http', '$log'];

  function TourBookingsService($http, $log) {
    return {
      getBookings: getBookings,
      getDetail: getDetail,
      getTour: getTour,
      cancelBooking: cancelBooking
    };

    // Implementation
    function getBookings() {
      return $http.get('/bookings/tour')
        .then(getSuccess)
        .catch(getError);
    }

    function getDetail(id) {
      return $http.get('/bookings/tour/' + id)
        .then(getSuccess)
        .catch(getError);
    }

    function getTour(id) {
      return $http.get('/tour/' + id)
        .then(getSuccess)
        .catch(getError);
    }

    function cancelBooking(id) {
      return $http.delete('/bookings/tour/' + id)
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
