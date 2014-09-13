app.controller('MapCtrl',
    function ($scope, $rootScope, $window, coord2addr, dmap) {

        $scope.hasOpener = !!$window.opener;

        $scope.select = function () {
            $window.opener.callbackMapWindow($scope.lat, $scope.lng, $scope.content);
            $window.close();
        };

    });