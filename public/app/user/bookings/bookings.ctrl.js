(function() {
  'use strict';
  angular
    .module('bookingsApp')
    .controller('BookingsCtrl', BookingsCtrl);

  BookingsCtrl.$inject = ['BookingsService', '$log', '$mdToast'];

  function BookingsCtrl(BookingService, $log, $mdToast) {
    var vm = this;
    console.log('inseide bookings');
    vm.txt = 'bookin';
    vm.bookings = {};

    activate();

    function activate() {
      return getBookings().then(function() {
        $log.info('Activated Avengers View');
      });
    }

    function getBookings() {
      return BookingService.getBookings()
        .then(function(data) {
          vm.bookings = data;
        });
    }
  }
}());
