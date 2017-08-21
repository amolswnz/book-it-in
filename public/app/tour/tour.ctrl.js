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

    vm.minDate = new Date();
    vm.bookings.bookingDate = [];

    vm.bookings.adult = [];
    vm.bookings.child = [];
    vm.bookings.totalForThisActivity = [];

    vm.bookings.price = {};
    vm.bookings.price.totalAdult = [];
    vm.bookings.price.totalChild = [];

    vm.bookings.cartButton = [];

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
      // console.log('id ', id);
      // console.log('date', vm.bookings.bookingDate);
      // console.log('cost', vm.bookings.totalForThisActivity);
      // console.log('date',vm.bookings.bookingDate[id]);
      // if(vm.bookings.bookingDate[id]==null) {
      //   console.log('null',vm.bookings.bookingDate[id]);
      //   return false;
      // }
      //
      var bookingData = {
        'userId': 'somevalue',
        'activity': {
          'objId': id,
          'adult': vm.bookings.adult[id],
          'child': vm.bookings.child[id],
          'dateBooked': vm.bookings.bookingDate[id]
        }
      };
      return TourService.postBooking(bookingData)
        .then(function(data) {
          console.log(data);
          // vm.tours = data;
        });

      // console.log(id,vm.bookings.bookingDate,vm.bookings.adult,vm.bookings.child);
      // id
      // vm.bookings.bookingDate[]
      // vm.bookings.adult[]
      // vm.bookings.child[]


    };

    vm.calculateAdultPrice = function(id, price) {
      vm.bookings.price.totalAdult[id] = vm.bookings.adult[id] * price;
      getTotalForThisActivity(id);
    };
    vm.calculateChildPrice = function(id, price) {
      vm.bookings.price.totalChild[id] = vm.bookings.child[id] * price;
      getTotalForThisActivity(id);
    };

    function getTotalForThisActivity(id) {
      vm.bookings.totalForThisActivity[id] = 0;
      if (vm.bookings.price.totalAdult[id] != null)
        vm.bookings.totalForThisActivity[id] += vm.bookings.price.totalAdult[id];
      if (vm.bookings.price.totalChild[id] != null)
        vm.bookings.totalForThisActivity[id] += vm.bookings.price.totalChild[id];
    }
  }


}());
