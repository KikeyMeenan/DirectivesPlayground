angular.module('app').controller('mainCtrl', function($scope){
    $scope.user = {
        name: 'mike',
        address: {
            street: 'Queens Court',
            city: 'Luton'
        }
    }
});