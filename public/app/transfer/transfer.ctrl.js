(function() {
  'use strict';
  angular
    .module('transferApp')
    .controller('TransferCtrl', TransferCtrl);

  TransferCtrl.$inject = ['TransferService', '$log', '$mdToast'];

  function TransferCtrl(TransferService, $log, $mdToast) {
    var vm = this;

    vm.cities = [];
    vm.bookings = {};

    vm.minDate = new Date();
    vm.bookings.bookingDate = [];

    vm.bookings.pax = [];

    vm.bookings.totalCost = [];

    vm.bookings.cartButton = [];
    vm.bookings.added = [];

// debug
vm.bookings.city = 'Auckland';

    activate();

    function activate() {
      return getCities().then(function() {
        $log.info('Activated Avengers View');
      });
    }

    function getCities() {
      return TransferService.getCities()
        .then(function(data) {
          vm.cities = data;
          // return vm.cities;
        });
    }

    vm.showList = function() {
      if (typeof(vm.bookings.detail) !== false) {
        vm.bookings.detail = 1;
        return TransferService.getTransfers(vm.bookings.city)
          .then(function(data) {
            vm.transfers = data;
          });
      } else {
        vm.bookings.detail = 'undefined';
      }
    };

    vm.addToCart = function(id) {
      var bookingData = {
        'transfer': {
          'objId': id,
          'pax': vm.bookings.pax[id],
          'totalCost': vm.bookings.totalCost[id],
          'dateBooked': vm.bookings.bookingDate[id]
        }
      };
      console.log(bookingData);
      return TransferService.postBooking(bookingData)
        .then(function(data) {
          var msgTheme = data.success ? 'success-toast' : 'error-toast';
          $mdToast.show(
            $mdToast.simple()
            .textContent(data.msg)
            .position('bottom right')
              .hideDelay(4000)
              .parent($("#toast-container"))
              .theme(msgTheme)
          );
          console.log(vm.bookings.added);
          vm.bookings.added[id] = true;
        }).catch(function(err) {
          console.log('err', err);
        });
    };

    vm.calculateTotalCost = function(id, price) {
      vm.bookings.totalCost[id] = 0;
      if (vm.bookings.totalCost[id] != null)
        vm.bookings.totalCost[id] = vm.bookings.pax[id] * price;
    };
  }
}());
