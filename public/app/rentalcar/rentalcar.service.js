(function() {
  angular
    .module('rentalcarApp')
    .service('RentalcarService', RentalcarService);

  RentalcarService.$inject = ['$http', '$log'];

  function RentalcarService($http, $log) {
    return {
      // getCities: getCities,
      // getActivities: getActivities,

      postBooking: postBooking
    };

    // Implementation
    // function getCities() {
    //   return $http.get('/rentalcar/cities')
    //     .then(getSuccess)
    //     .catch(getError);
    // }

    // function getActivities(city) {
    //   console.log('get activitys');
    //   return $http.get('/activity/city/' + city)
    //     .then(getSuccess)
    //     .catch(getError);
    // }

    function postBooking(bookingData) {
      return $http.post('/booking/save/rentalcarBooking', bookingData)
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
