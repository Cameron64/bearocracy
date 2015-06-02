angular.module('stream').controller('banner', ['$scope', function ($scope) {
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
}]);
