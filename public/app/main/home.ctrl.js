(function() {
    'use strict';
    angular.module('meanApp')
        .controller('HomeCtrl', function($scope) {
            $scope.txt = "Hello from Home Controller";
        });

}());
