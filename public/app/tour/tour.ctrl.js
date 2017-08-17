(function() {
  'use strict';
  angular
    .module('tourApp')
    .controller('TourCtrl', TourCtrl);

  TourCtrl.$inject = ['TourService', '$log'];

  function TourCtrl(TourService, $log) {
    var vm = this;

    vm.cities = [];
    vm.bookings = {};

    activate();

    function activate() {
      return getCities().then(function() {
        $log.info('Activated Avengers View');
      });
    }

    function getCities() {
      return TourService.getCities()
        .then(function(data) {
          vm.cities = data;
          console.log(vm);
          return vm.cities;
        });
    }
  }


}());
