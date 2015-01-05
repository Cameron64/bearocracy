/**
 * Created by camer_000 on 11/23/2014.
 */
(function () {

    var app = angular.module('stream', []);

    app.directive('mainbanner', function () {
        return{
            restrict: 'E',
            templateUrl: 'slideshow.html',
            controller: function ($scope) {
                $scope.hideBanner = false;
                $scope.numBanners = 18;
//              TODO:  dynamically figure out numbBanners
                $scope.pick = function () {
                    $scope.imgNum = Math.floor(Math.random() * $scope.numBanners) + 1;
                    $scope.banner = "img/banners/bearbanner" + $scope.imgNum + ".jpg"

                };
                $scope.pick();
            }
        };
    });


    app.directive('mainToggles', function () {
        return{
            restrict: 'E',
            templateUrl: 'mainToggles.html'
        }
    });

    app.directive('subToggles', function () {
        return{
            restrict: 'E',
            templateUrl: 'subToggles.html'
        }
    });

    app.factory('sharedService', function () {
        var shared = {};
        shared.sharingMessage = false;
        shared.sharingMessage2 = false;

        return shared;
    });


    app.controller('MainController', ['$scope', 'sharedService', function ($scope, sharedService) {
        $scope.hideChat = false;

        $scope.sharedService = sharedService;


        $scope.change = function () {

            //set hide opposite
            $scope.hideChat = !$scope.hideChat;

            //share to service
            sharedService.sharingMessage = $scope.hideChat;
        }

    }]);

    app.controller('SubController', ['$scope', 'sharedService', function ($scope, sharedService) {


        $scope.check = function () {
            $scope.sharedService = sharedService;
            $scope.hideChat = $scope.sharedService.sharingMessage;
            return($scope.hideChat);
        };

    }]);

    app.controller('StreamController', ['$scope', 'sharedService', function ($scope, sharedService) {
        $scope.hideStream = false;

        $scope.sharedService = sharedService;


        $scope.change = function () {

            //set hide opposite
            $scope.hideStream = !$scope.hideStream;

            //share to service
            sharedService.sharingMessage2 = $scope.hideStream;
        }

    }]);

    app.controller('StreamSubController', ['$scope', 'sharedService', function ($scope, sharedService) {

        $scope.check = function() {
            $scope.sharedService = sharedService;
            $scope.hideStream = $scope.sharedService.sharingMessage2;
            return($scope.hideStream);
        };


    }]);



    /*app.directive('streamload', function () {
     return{
     restrict: 'E',
     templateUrl: 'streamloader.html',
     controller: function ($scope) {

     $scope.hideStream = false;
     }

     };
     });*/

   /* app.directive('iframeSetDimentionsOnload', [function () {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                element.on('load', function () {
                    $scope.StreamBoxHeight = document.getElementById("streamBox").offsetHeight;
                    console.log($scope.StreamBoxHeight);
                    var iFrameHeight = $scope.StreamBoxHeight + 'px';
                    var iFrameWidth = '100%';
                    element.css('width', iFrameWidth);
                    element.css('height', iFrameHeight);
                })

            }
        }
    }]);*/


})();