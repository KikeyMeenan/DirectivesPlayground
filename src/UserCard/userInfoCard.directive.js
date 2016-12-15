angular.module('app').directive('userInfoCard', function(){
    return {
        templateUrl: "UserCard/userInfoCard.html",
        restrict: "E",
        //creates an inherited, rather than shared scope(creates a new version of parent scope)
        //scope: true,

        //create an isolated scope (completely new scope, no inheritance)
        scope: {
            user: "="
        },
        controller: function($scope){
            $scope.collapsed = false;

            $scope.knightMe = function(user){
                user.rank = "knight";
            };

            $scope.collapse = function(){
                $scope.collapsed = !$scope.collapsed;
            }
        }
    };
});