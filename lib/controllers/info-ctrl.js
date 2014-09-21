app.controller('InfoCtrl',
    function ($scope, $rootScope, $window, $location, coord2addr, dmap) {
        var
            marker = '',
            params = $location.search(),
            showInfo = function (lat, lng, content) {
                hideInfo();
                marker = dmap.putMarker(lat, lng);

                $scope.content = content;
                $scope.lat = lat;
                $scope.lng = lng;
            },
            hideInfo = function () {
                if (!marker) return;
                marker.setVisible(false);
            };

        $scope.hasOpener = !!$window.opener;

        $scope.select = function () {
            $window.opener.callbackMapWindow($scope.lat, $scope.lng, $scope.content);
            $window.close();
        };


        dmap.click(function (event) {
            var latLng = event.latLng;
            $rootScope.$broadcast('mapClick', latLng.getLat(), latLng.getLng());
        });


        // SearchCtrl...
        $rootScope.$on('mapSelected', function (event, lat, lng, content) {
            console.log('mapSelected', lat, lng);
            showInfo(lat, lng, content);
        });

        $rootScope.$on('mapClick', function (event, lat, lng) {
            console.log('mapClick:', lat, lng);

            coord2addr.get({latitude: lat, longitude: lng})
                .then(function (data) {
                    showInfo(lat, lng, data.fullName);
                    console.log(data);
                });

        });


        if(params.lat && params.lng) {
            $rootScope.$broadcast('mapClick', params.lat, params.lng);
            dmap.panTo(params.lat, params.lng);
        }

    });