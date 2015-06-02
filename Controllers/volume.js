angular.module('stream').controller('volume', ['$scope', function ($scope) {
    $scope.volume = 0.5;

    $scope.$watch('volume', function () {

        var player = document.getElementById("livestreamPlayer");
        player.setVolume($scope.volume);
    });
}]);
