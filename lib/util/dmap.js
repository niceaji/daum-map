/**
 * daum map
 */
(function (global, maps) {
    'use strict';

    var map = null;

    global.dmap = {

        // TODO. apikey 변경!
        // 데이터형 API
        dataTypeApikey: 'dbc05af765bf1a2fcbbd6e74c58f32aa81033cec',


        //초기화
        init: function (el, lat, lng, level) {

            map = new maps.Map(el, {
                center: new maps.LatLng(lat, lng),
                level: level
            });

            return map;
        },
        getMap: function() {
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


        click: function (callback) {
            maps.event.addListener(map, 'click', callback);
        }

    };


})(window, daum.maps);

