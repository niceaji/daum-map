//http://dna.daum.net/apis/local/ref#coord2addr

app.factory('coord2addr', function ($http, $q) {

    var
        url = 'http://apis.daum.net/local/geo/coord2addr',
        opts = {
            apikey: dmap.apikey,
            latitude: '',
            longitude: '',
            inputCoordSystem: 'WGS84',
            format: '', // null | simple
            output: 'json',
            callback: 'JSON_CALLBACK'
        };

    return {
        get: function (lat, lng) {

            var
                deferred = $q.defer();

            opts.latitude = lat;
            opts.longitude = lng;

            $http.jsonp(url, {params: opts})
                .then(function (res) {
                    deferred.resolve(res.data);
                }, function () {
                    deferred.reject("error!");
                });

            return deferred.promise;
        }
    };
});