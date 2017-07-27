(function() {
    'use strict';
    angular.module('bookitinApp')
        .controller('MainCtrl', function($scope, $http) {
            $scope.txt = "Hello from Angular Controller";
        });
}());
