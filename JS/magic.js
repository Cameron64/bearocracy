(function () {

    var app = angular.module('stream', ['ngStorage']);

    app.directive('mainbanner', ['$window', function ($window) {
        return{
            restrict: 'E',
            templateUrl: 'slideshow.html',
            controller: function ($scope) {
                $scope.hideBanner = false;
                $scope.numBanners = 18;
//              TODO:  dynamically figure out numbBanners (can be done with server side support like PHP and AJAX)
                $scope.pick = function () {
                    $scope.imgNum = Math.floor(Math.random() * $scope.numBanners) + 1;
                    $scope.banner = "img/banners/bearbanner" + $scope.imgNum + ".jpg"

                };
                $scope.bearopia = function() {
                        $window.open('http://www.bearopia.xtreemhost.com', '_blank');
                };

                $scope.pick();
            }
        };
    }]);

    app.directive('mainToggles', function () {
        return{
            restrict: 'E',
            templateUrl: 'mainToggles.html',
            controller: 'MainController'
        }
    });

    app.directive('subToggles', function () {
        return{
            restrict: 'E',
            templateUrl: 'subToggles.html',
            controller: 'MainController'
        }
    });

    app.directive('volume', function(){
        return{
            restrict: 'E',
            templateUrl: 'volume.html',
            controller: function($scope){
                $scope.volume = 0.5;

                $scope.$watch('volume', function () {
                    $scope.player = document.getElementById("livestreamPlayer");
                    $scope.player.showMuteButton(false);

                    $scope.player.setVolume($scope.volume);
                });
            }
        }
    });

    app.directive('mainThumbs', function(){
        return{
            restrict: 'E',
            templateUrl: 'mainThumbs.html',
            controller: 'MainController'
        }
    });
    app.directive('subThumbs', function(){
        return{
            restrict: 'E',
            templateUrl: 'subThumbs.html',
            controller: 'MainController'
        }
    });

    app.controller('MainController', ['$scope', '$localStorage','$interval', function ($scope, $localStorage, $interval) {

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

        $scope.player = document.getElementById("livestreamPlayer");

        $scope.switchChannel = function (channelInput) {
            $scope.player.load(channelInput);
            $scope.player.setClipID(null);
            $scope.player.startPlayback();
        };

        $interval(function(){
            $scope.channelOneThumb = thumbPrefix + $scope.channelOne + '&t='
                + new Date().valueOf();
            $scope.channelTwoThumb = thumbPrefix + $scope.channelTwo + '&t='
                + new Date().valueOf();
        },10000)

    }]);

})();