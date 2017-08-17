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
          // return vm.cities;
        });
    }

    vm.showList = function() {
      console.log(vm);
      if (typeof(vm.bookings.detail) !== false) {
        vm.bookings.detail = 1;
        return TourService.getActivities(vm.bookings.city)
          .then(function(data) {
            vm.activities = data;
            console.log(data);
          });
      }
      else {
        vm.bookings.detail = undefined;
      }
    };

  }


}());
