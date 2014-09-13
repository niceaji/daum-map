/**
 *
 * <daum-map level="9" lat="33.380038917758824" lng="126.554480321402"></daum-map>
 * @requires dmap
 *
 */
app.directive('daumMap',
    function ($rootScope, $templateCache, $compile, dmap, coord2addr) {
        var
            marker = '',
            overlay = '',

            showInfo = function (lat, lng, content) {
                hideInfo();
                marker = dmap.putMarker(lat, lng);
                overlay = dmap.putOverlay(lat, lng, content);


//                $scope.content = content;
//                $scope.lat = lat;
//                $scope.lng = lng;
            },
            hideInfo = function () {
                if (!marker) return;
                marker.setVisible(false);
                overlay.setVisible(false);
            };

        return {
            restrict: 'E',
            scope: {
                lat: '=?',
                lng: '=?',
                level: '=?'
            },
            replace: true,
            template: '<div style="width:100%;height:100%;" ></div>',
//            compile : function(element, attrs) {
//
//                console.log('compile')
//            },
//            controller: function ($scope) {
//
//                $scope.content = "11111111";
//
//            },
            link: function (scope, element) {

                var
                    overlayTemplate = $templateCache.get('info-overlay.html');

                dmap.init(element[0], scope.lat, scope.lng, scope.level);
                dmap.putZoom();
                dmap.putMaptype();

//                element.html($templateCache.get('info-overlay.html'));
//                $compile(element.contents())(scope);


                dmap.click(function (event) {

                    var
                        latLng = event.latLng,
                        lat = latLng.getLat(),
                        lng = latLng.getLng();


                    $rootScope.$broadcast('mapClick', latLng.getLat(), latLng.getLng());

                    console.log('mapClick:', lat, lng);

                    coord2addr.get({latitude: lat, longitude: lng})
                        .then(function (data) {

                            scope.content = data.fullName;

                            console.log(overlayTemplate)
                            var el = $compile(overlayTemplate)(scope);
console.log(el.html())
                            showInfo(lat, lng, el.html());


//                            $compile(overlayTemplate)(scope, function (cloned, scope) {
//
//                                showInfo(lat, lng, cloned.html());
////                                element.append(cloned);
//                            });

//                            showInfo(lat, lng, data.fullName);
                            console.log(data);
                        });
                });

                // SearchCtrl...
                $rootScope.$on('mapSelected', function (event, lat, lng, content) {
                    console.log('mapSelected:', lat, lng);
                    showInfo(lat, lng, content);
                });


            }
        }
    });