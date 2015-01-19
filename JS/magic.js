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

    app.controller('MainController', ['$scope', '$localStorage', function ($scope, $localStorage) {

        $scope.$storage = $localStorage.$default({
            chat: 0,
            stream: 0,
            banner: 0
        });

    }]);

})();