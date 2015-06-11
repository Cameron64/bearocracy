(function () {

    var app = angular.module('holidays', []);

    app.directive('snow', function () {
        return{
            restrict: 'E',
            templateUrl: 'Directives/snow.html',
            controller: 'snow'
        }
    });

})();
