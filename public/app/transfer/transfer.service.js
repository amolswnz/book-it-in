(function() {
  angular
    .module('transferApp')
    .service('TransferService', TransferService);

  TransferService.$inject = ['$http', '$log'];

  function TransferService($http, $log) {
    return {
      getCities: getCities,
      getTransfers: getTransfers,

      postBooking: postBooking
    };

    // Implementation

    function getCities() {
      return $http.get('/transfer/cities')
        .then(getSuccess)
        .catch(getError);
    }

    function getTransfers(city) {
      console.log('get transfers');
      return $http.get('/transfer/city/' + city)
        .then(getSuccess)
        .catch(getError);
    }

    function postBooking(bookingData) {
      return $http.post('/booking/save/transfer', bookingData)
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
