(function() {
  'use strict';
  angular
    .module('rentalcarApp')
    .controller('RentalcarCtrl', RentalcarCtrl);

  RentalcarCtrl.$inject = ['RentalcarService', '$log', '$mdToast', '$location', '$http'];

  function RentalcarCtrl(RentalcarService, $log, $mdToast,$location, $http) {
    var vm = this;
    vm.types = ['(cities)'];
    vm.minDate = new Date();
    // Or choose any one of theses
    // ['geocode']
    // ['establishment']
    // ['address

    // vm.placeChanged = function() {
    //   // vm.place = this.getPlace();
    //   vm.place = this.autocomplete.getPlace();
    //   console.log('location', vm.place);
    // };

    // RentalcarService.get().then(function(data) {
      vm.cities = {
        some: 'value'
      };
      vm.txt = 'sample';
    // });

    $http({
      url: '//maps.googleapis.com/maps/api/distancematrix/json',
      method: "GET",
      params: {
        origins: 'Vancouver+BC|Seattle',
        destinations: 'San+Francisco|Victoria+BC',
        mode: 'driving',
        key: 'AIzaSyBMiC29G4FDk4htjwOGvJnZR7kqq6n0iLo'
      }
   }).then(function(data) {
     console.log(data);
   });

    vm.addBooking = function() {
      console.log(vm);
      if (typeof(vm.booking.detail) !== false)
        vm.booking.detail = 1;
      else {
        vm.booking.detail = undefined;
      }
    };

  }
})();
