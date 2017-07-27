(function() {
    'use strict';
    angular.module('meanApp')
        .controller('MainCtrl', function($scope, $http) {
            $scope.txt = "Hello from Angular Controller";
        });
}());
