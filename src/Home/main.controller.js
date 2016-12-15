angular.module('app').controller('mainCtrl', function($scope){
    $scope.user1 = {
        name: 'mike',
        address: {
            street: 'Queens Court',
            city: 'Luton'
        }
    };

    $scope.user2 = {
        name: 'grant',
        address: {
            street: 'Lame Street',
            city: 'Cheshunt'
        }
    };
});