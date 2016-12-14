angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
    $scope.user = {
        name: 'mike',
        address: {
            street: 'Queens Court',
            city: 'Luton'
        }
    }
});

// angular.module('app').directive('userInfoCard', function(){
//     return {
//         templateUrl: "UserCard/userInfoCard.html",
//         restrict: "E"
//     };
// });

