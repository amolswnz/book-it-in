(function() {
  angular
    .module('tourApp')
    .service('TourService', TourService);

  TourService.$inject = ['$http', '$log'];

  function TourService($http, $log) {
    return {
      getCities: getCities,
      getTours: getTours,

      postBooking: postBooking
    };

    // Implementation

    function getCities() {
      return $http.get('/tour/cities')
        .then(getSuccess)
        .catch(getError);
    }

    function getTours(city) {
      console.log('get tours');
      return $http.get('/tour/city/' + city)
        .then(getSuccess)
        .catch(getError);
    }

    function postBooking(bookingData) {
      return $http.post('/booking/tour', bookingData)
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
