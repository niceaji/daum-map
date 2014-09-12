(function (global, maps) {
    'use strict';

    global.dmap = {

        // TODO. apikey 변경!
        apikey: 'dbc05af765bf1a2fcbbd6e74c58f32aa81033cec',

        //초기화
        init: function (el, lat, lng, level) {

            return new maps.Map(el, {
                center: new maps.LatLng(lat, lng),
                level: level
            });

        },
        putZoom: function (map) {
            var zoomControl = new maps.ZoomControl();
            map.addControl(zoomControl, maps.ControlPosition.RIGHT);
        },
        putMaptype: function (map) {
            var mapTypeControl = new maps.MapTypeControl();
            map.addControl(mapTypeControl, maps.ControlPosition.TOPRIGHT);
        },
        click: function (map, callback) {
            maps.event.addListener(map, 'click', callback);
        }

    };


})(window, daum.maps);

