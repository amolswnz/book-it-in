angular
  .module('rentalcarApp')
  .service('RentalcarCities', ['$http', function($http) {
    var service = {
        get: getCities,
    };
    return service;

    function getCities() {
      return $http.get('/rentalcar/cities').then(function(response) {
        return response.data;
      });
    }
  }]);
