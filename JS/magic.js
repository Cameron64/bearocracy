/**
 * Created by camer_000 on 11/23/2014.
 */
(function () {

    var app = angular.module('stream', []);

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    }



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
        shared.isChatHidden = false;
        shared.isStreamHidden = false;

        return shared;
    });


    app.controller('MainController', ['$scope', 'sharedService', function ($scope, sharedService) {
        $scope.hideChat = false;

        $scope.sharedService = sharedService;


        $scope.change = function () {

            //set hide opposite
            $scope.hideChat = !$scope.hideChat;

            //share to service
            sharedService.isChatHidden = $scope.hideChat;
        }

    }]);

    app.controller('SubController', ['$scope', 'sharedService', function ($scope, sharedService) {


        $scope.check = function () {
            $scope.sharedService = sharedService;
            $scope.hideChat = $scope.sharedService.isChatHidden;
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
            sharedService.isStreamHidden = $scope.hideStream;
        }

    }]);

    app.controller('StreamSubController', ['$scope', 'sharedService', function ($scope, sharedService) {

        $scope.check = function() {
            $scope.sharedService = sharedService;
            $scope.hideStream = $scope.sharedService.isStreamHidden;
            return($scope.hideStream);
        };


    }]);

    if(getCookie("bearocracy")){
        $scope.hideBanner = true;
    }else{
        console.log(this.hideBanner);
        console.log("made it");
    }
})();