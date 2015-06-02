(function () {

    angular.module('stream', ['ngStorage']).

    directive('mainbanner',  function () {
        return{
            restrict: 'E',
            templateUrl: 'Directives/slideshow.html',
            controller: 'banner'
        };
    }).

    directive('mainToggles', function () {
        return{
            restrict: 'E',
            templateUrl: 'Directives/mainToggles.html',
            controller: 'main'
        }
    }).

    directive('subToggles', function () {
        return{
            restrict: 'E',
            templateUrl: 'Directives/subToggles.html',
            controller: 'main'
        }
    }).

    directive('volume', function(){
        return{
            restrict: 'E',
            templateUrl: 'Directives/volume.html',
            controller: 'volume'
        }
    }).

    directive('mainThumbs', function(){
        return{
            restrict: 'E',
            templateUrl: 'Directives/mainThumbs.html',
            controller: 'main'
        }
    }).

    directive('subThumbs', function(){
        return{
            restrict: 'E',
            templateUrl: 'Directives/subThumbs.html',
            controller: 'main'
        }
    })

})();