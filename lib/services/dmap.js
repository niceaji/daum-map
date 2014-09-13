/**
 *
 *
 * <script src="http://apis.daum.net/maps/maps3.js?apikey={apikey}"></script>
 *
 */
app.factory('dmap', function ($window) {

    var maps = $window.daum.maps;

    return {

        // TODO. apikey 변경!
        // 데이터형 API
        dataTypeApikey: 'dbc05af765bf1a2fcbbd6e74c58f32aa81033cec',

        init: function (el, lat, lng, level) {

            map = new maps.Map(el, {
                center: new maps.LatLng(lat, lng),
                level: level
            });

            return map;
        },
        map: function () {
            return map;
        },
        putZoom: function () {
            var zoomControl = new maps.ZoomControl();
            map.addControl(zoomControl, maps.ControlPosition.RIGHT);
        },
        putMaptype: function () {
            var mapTypeControl = new maps.MapTypeControl();
            map.addControl(mapTypeControl, maps.ControlPosition.TOPRIGHT);
        },
        putMarker: function (lat, lng) {
            var marker = new daum.maps.Marker({
                position: new daum.maps.LatLng(lat, lng)
            });
            marker.setMap(map);

            return marker;
        },
        putInfowindow: function (content) {
            var infowindow = new maps.InfoWindow({
                content: '<p style="margin:7px 12px;">' + content + "</p>",
                removable: false
            });
            return infowindow;
        },

        panTo: function (lat, lng) {
            map.panTo(new daum.maps.LatLng(lat, lng));
        },


        click: function (callback) {
            maps.event.addListener(map, 'click', callback);

        }
    }
});
