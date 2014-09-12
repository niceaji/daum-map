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

            var map = dmap.init(element[0], scope.lat, scope.lng, scope.level);

            dmap.putZoom(map);
            dmap.putMaptype(map);

            dmap.click(map, function () {
                var center = map.getCenter();
                $rootScope.$broadcast('mapClick', center.getLat(), center.getLng());
            });

        }
    }
});