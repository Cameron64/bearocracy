/**
 * Created by camer_000 on 11/23/2014.
 */
(function () {

    var app = angular.module('stream', ['ngStorage']);

    app.directive('mainbanner', function () {
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
                $scope.pick();
            }
        };
    });

    /* app.directive('resize', function() {
     return function (scope, element, attrs) {
     element.height($(window).height());
     }
     });*/

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

    app.controller('MainController', ['$scope', '$localStorage', function ($scope, $localStorage) {

        $scope.channelOne = "bearocrats";
        $scope.channelTwo = "beargaming";

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

    }]);

})();