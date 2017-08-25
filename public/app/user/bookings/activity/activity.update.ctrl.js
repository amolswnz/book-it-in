(function() {
  'use strict';
  angular
    .module('bookingsApp')
    .controller('ActivityUpdateCtrl', ActivityUpdateCtrl);

  ActivityUpdateCtrl.$inject = ['ActivityBookingsService', '$log', '$mdToast', '$routeParams', '$mdDialog', '$location'];

  function ActivityUpdateCtrl(ActivityBookingsService, $log, $mdToast, $routeParams, $mdDialog, $location) {
    var vm = this;
    console.log('inseide act bookings');
    vm.txt = 'bookin';
    vm.booking = {};
    vm.activity = {};

    activate();

    function activate() {
      return getDetail().then(function() {
        $log.info('Activated Avengers View');
      });
    }

    function getDetail() {
      return ActivityBookingsService.getDetail($routeParams.id)
        .then(function(data) {
          vm.booking = data;
          return ActivityBookingsService.getActivity(data.objId)
            .then(function(activity) {
              vm.activity = activity;
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
        return ActivityBookingsService.cancelBooking($routeParams.id)
          .then(function(data) {
            $mdToast.show(
              $mdToast.simple()
              .textContent('Booking has been cancelled')
              .position('bottom right')
                .hideDelay(4000)
                .parent($("#toast-container"))
                .theme('success-toast')
            );
            $location.path('/activity');
          });
      }, function() {
        $location.path('/activity');
      });
    };
  }
}());
