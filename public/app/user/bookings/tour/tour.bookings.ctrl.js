(function() {
  'use strict';
  angular
    .module('bookingsApp')
    .controller('TourBookingsCtrl', TourBookingsCtrl);

  TourBookingsCtrl.$inject = ['TourBookingsService', '$log', '$mdToast'];

  function TourBookingsCtrl(TourBookingsService, $log, $mdToast) {
    var vm = this;
    console.log('inseide act bookings');
    vm.txt = 'bookin';
    vm.bookings = {};

    activate();

    function activate() {
      return getBookings().then(function() {
        $log.info('Activated Avengers View');
      });
    }

    function getBookings() {
      return TourBookingsService.getBookings()
        .then(function(data) {
          vm.bookings = data;
          console.log(vm.bookings);
        });
    }
  }
}());
