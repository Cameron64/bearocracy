(function () {

    var app = angular.module('stream', ['ngStorage']);

    app.directive('mainbanner', ['$window', function ($window) {
        return{
            restrict: 'E',
            templateUrl: 'Directives/slideshow.html',
            controller: 'banner'
        };
    }]);

    app.directive('mainToggles', function () {
        return{
            restrict: 'E',
            templateUrl: 'Directives/mainToggles.html',
            controller: 'main'
        }
    });

    app.directive('subToggles', function () {
        return{
            restrict: 'E',
            templateUrl: 'Directives/subToggles.html',
            controller: 'main'
        }
    });

    app.directive('volume', function(){
        return{
            restrict: 'E',
            templateUrl: 'Directives/volume.html',
            controller: 'volume'
        }
    });

    app.directive('mainThumbs', function(){
        return{
            restrict: 'E',
            templateUrl: 'Directives/mainThumbs.html',
            controller: 'main'
        }
    });

    app.directive('subThumbs', function(){
        return{
            restrict: 'E',
            templateUrl: 'Directives/subThumbs.html',
            controller: 'main'
        }
    });

})();