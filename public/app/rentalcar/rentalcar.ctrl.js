(function() {
  angular.module('rentalcarApp')
    .controller('RentalcarCtrl', ['$scope', 'RentalcarCities', 'NgMap', '$location', function($scope, RentalcarCities, NgMap, $location) {

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

      RentalcarCities.get().then(function(data) {
        vm.cities = data;
        vm.txt = 'sample';
      });

      vm.addBooking = function() {
        console.log(vm);
        if (typeof(vm.booking.detail) !== false)
          vm.booking.detail = 1;
        else {
          vm.booking.detail = undefined;
        }
      };

    }]);
}());
