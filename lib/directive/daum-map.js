app.directive('daumMap', function ($rootScope) {

    return {
        restrict: 'E',
        scope: {
            lat: '=?',
            lng: '=?',
            level: '=?'
        },
        replace: true,
        template: '<div style="width:100%;height:100%;"></div>',
        link: function (scope, element) {

            dmap.init(element[0], scope.lat, scope.lng, scope.level);

            dmap.putZoom();
            dmap.putMaptype();

            dmap.click(function (event) {
                var latLng = event.latLng;
                $rootScope.$broadcast('mapClick', latLng.getLat(), latLng.getLng());
            });

        }
    }
});