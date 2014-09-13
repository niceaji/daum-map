app.controller('SearchCtrl',
    function ($scope, $rootScope, addr2coord, dmap) {

        $scope.hasError = false;

        $scope.searchAddr = function () {

            if (!$scope.query) {
                $scope.isResult = false;
                $scope.hasError = true;
                return;
            }

            addr2coord.get({q:$scope.query, pageno:1})
                .then(function (data) {
                    console.log(data.channel);

                    $scope.items = data.channel.item;
                    if ($scope.items.length > 0) {
                        $scope.isResult = true;
                        $scope.hasError = false;
                    }
                    else {
                        $scope.isResult = false;
                        $scope.hasError = true;
                    }

                });
        };

        $scope.moveMap = function (item) {
            dmap.panTo(item.lat, item.lng);
            $rootScope.$emit('mapSelected', item.lat, item.lng, item.title+' '+item.buildingAddress);
        };

        $scope.deleteResult = function () {
            $scope.isResult = false;
            $scope.query = '';
        };



    });