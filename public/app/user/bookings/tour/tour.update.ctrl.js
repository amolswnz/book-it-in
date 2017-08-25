(function() {
  'use strict';
  angular
    .module('bookingsApp')
    .controller('TourUpdateCtrl', TourUpdateCtrl);

  TourUpdateCtrl.$inject = ['TourBookingsService', '$log', '$mdToast', '$routeParams', '$mdDialog', '$location'];

  function TourUpdateCtrl(TourBookingsService, $log, $mdToast, $routeParams, $mdDialog, $location) {
    var vm = this;
    console.log('inseide act bookings');
    vm.txt = 'bookin';
    vm.booking = {};
    vm.tour = {};

    activate();

    function activate() {
      return getDetail().then(function() {
        $log.info('Activated Avengers View');
      });
    }

    function getDetail() {
      return TourBookingsService.getDetail($routeParams.id)
        .then(function(data) {
          vm.booking = data;
          return TourBookingsService.getTour(data.objId)
            .then(function(tour) {
              vm.tour = tour;
            });
        });
    }

    vm.confirmCancellation = function(ev) {
      var confirm = $mdDialog.confirm()
        .title('Would you like to CANCEL your booking?')
        .textContent(' Please note that you will incur cancelation charges')
        .targetEvent(ev)
        .ok('Yes do it!')
        .cancel('NO');

      $mdDialog.show(confirm).then(function() {
        return TourBookingsService.cancelBooking($routeParams.id)
          .then(function(data) {
            $mdToast.show(
              $mdToast.simple()
              .textContent('Booking has been cancelled')
              .position('bottom right')
                .hideDelay(4000)
                .parent($("#toast-container"))
                .theme('success-toast')
            );
            $location.path('/tour');
          });
      }, function() {
        $location.path('/tour');
      });
    };
  }
}());
