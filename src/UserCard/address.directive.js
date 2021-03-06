angular.module('app').directive('address', function(){
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'UserCard/address.html',
        controller: function($scope){
            console.log($scope);
            $scope.collapsed = false;
            $scope.collapseAddress = function(){
                $scope.collapsed = true;
            };
            $scope.expandAddress = function(){
                $scope.collapsed = false;
            };
        }
    };
});