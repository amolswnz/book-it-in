(function() {
  'use strict';
  angular
    .module('bookingsApp')
    .controller('ActivityBookingsCtrl', ActivityBookingsCtrl);

  ActivityBookingsCtrl.$inject = ['ActivityBookingsService', '$log', '$mdToast'];

  function ActivityBookingsCtrl(ActivityBookingsService, $log, $mdToast) {
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
      return ActivityBookingsService.getBookings()
        .then(function(data) {
          vm.bookings = data;
          console.log(vm.bookings);
        });
    }
  }
}());
