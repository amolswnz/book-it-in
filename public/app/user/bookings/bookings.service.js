(function() {
  angular
    .module('bookingsApp')
    .service('BookingsService', BookingsService);

  BookingsService.$inject = ['$http', '$log'];

  function BookingsService($http, $log) {
    return {
      getBookings: getBookings
    };

    // Implementation
    function getBookings() {
      return $http.get('/bookings/all')
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
