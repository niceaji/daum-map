/**
 *
 * <daum-map level="9" lat="33.380038917758824" lng="126.554480321402"></daum-map>
 *
 *
 */
app.directive('daumMap',
    function ($rootScope, dmap ) {

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
            }
        }
    });