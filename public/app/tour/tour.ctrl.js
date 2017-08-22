(function() {
  'use strict';
  angular
    .module('tourApp')
    .controller('TourCtrl', TourCtrl);

  TourCtrl.$inject = ['TourService', '$log', '$mdToast'];

  function TourCtrl(TourService, $log, $mdToast) {
    var vm = this;

    vm.cities = [];
    vm.bookings = {};

    vm.minDate = new Date();
    vm.bookings.bookingDate = [];

    vm.bookings.adult = [];
    vm.bookings.child = [];
    vm.bookings.totalForThisTour = [];

    vm.bookings.price = {};
    vm.bookings.price.totalAdult = [];
    vm.bookings.price.totalChild = [];

    vm.bookings.cartButton = [];
    vm.bookings.added = [];

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
          // return vm.cities;
        });
    }

    vm.showList = function() {
      if (typeof(vm.bookings.detail) !== false) {
        vm.bookings.detail = 1;
        return TourService.getTours(vm.bookings.city)
          .then(function(data) {
            vm.tours = data;
          });
      } else {
        vm.bookings.detail = 'undefined';
      }
    };

    vm.addToCart = function(id) {
      var bookingData = {
        'tour': {
          'objId': id,
          'adult': vm.bookings.adult[id],
          'totalAdultCost': vm.bookings.price.totalAdult[id],
          'totalChildCost': vm.bookings.price.totalChild[id],
          'child': vm.bookings.child[id],
          'dateBooked': vm.bookings.bookingDate[id]
        }
      };
      return TourService.postBooking(bookingData)
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

    vm.calculateAdultPrice = function(id, price) {
      vm.bookings.price.totalAdult[id] = vm.bookings.adult[id] * price;
      getTotalForThisTour(id);
    };
    vm.calculateChildPrice = function(id, price) {
      vm.bookings.price.totalChild[id] = vm.bookings.child[id] * price;
      getTotalForThisTour(id);
    };

    function getTotalForThisTour(id) {
      vm.bookings.totalForThisTour[id] = 0;
      if (vm.bookings.price.totalAdult[id] != null)
        vm.bookings.totalForThisTour[id] += vm.bookings.price.totalAdult[id];
      if (vm.bookings.price.totalChild[id] != null)
        vm.bookings.totalForThisTour[id] += vm.bookings.price.totalChild[id];
    }
  }


}());
