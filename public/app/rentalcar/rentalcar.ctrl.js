(function() {
  'use strict';
  angular.module('rentalcarApp')
    .controller('RentalcarCtrl', function($scope) {
      $scope.txt = "Hello from rentalcar Controller";
      console.log('-- inside rentalcar ctrl');
    });

}());
