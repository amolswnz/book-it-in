(function() {
  angular.module('rentalcarApp')
    .controller('RentalcarCtrl', ['$scope', 'RentalcarCities', function($scope, RentalcarCities) {
      // $scope.txt = "Hello from rentalcar Controller";
      // console.log('-- inside rentalcar ctrl');
      var vm = this;
      RentalcarCities.get().then(function(data) {
        vm.cities = data;
        vm.txt = 'sample';
      });
    }]);
}());
