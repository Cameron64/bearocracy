angular.module('stream').controller('main', ['$scope', '$localStorage','$interval', function ($scope, $localStorage) {
    $scope.channelOne = "bearocrats";
    $scope.channelTwo = "beargaming";
    $scope.showVolume = false;
    $scope.mainThumb1 = false;
    $scope.mainThumb2 = false;
    $scope.subThumb1 = false;
    $scope.subThumb2 = false;
    var thumbPrefix = 'http://thumbnail.api.livestream.com/thumbnail?name=';
    $scope.channelOneThumb = thumbPrefix + $scope.channelOne;
    $scope.channelTwoThumb = thumbPrefix + $scope.channelTwo;


    $scope.$storage = $localStorage.$default({
        chat: 0,
        stream: 0,
        banner: 0
    });

    var player = document.getElementById("livestreamPlayer");

    $scope.switchChannel = function (channelInput) {
        player.load(channelInput);
        player.setClipID(null);
        player.startPlayback();
    };

    $scope.getThumb = function(channel){
        $scope.channelOneThumb = thumbPrefix + channel + '&t='
            + new Date().valueOf();
    };
}]);
