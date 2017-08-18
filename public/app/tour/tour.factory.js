(function() {
  angular
    .module('tourApp')
    .factory('TourService', TourService);

  TourService.$inject = ['$http', '$log'];

  function TourService($http, $log)  {
    return {
      getCities: getCities,
      getTours: getTours
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


    function getSuccess(res) {
      return res.data;
    }

    function getError(err) {
      $log.error('XHR Failed for getAvengers.' + err.data);
    }

  }
}());
