//http://dna.daum.net/apis/local/ref#coord2addr

app.factory('coord2addr', function ($http, $q, config) {

    var
        url = 'http://apis.daum.net/local/geo/coord2addr',
        opts = {
            apikey: config.mapDataTypeApikey,
            latitude: '',
            longitude: '',
            inputCoordSystem: 'WGS84',
            format: '', // null | simple
            output: 'json',
            callback: 'JSON_CALLBACK'
        };

    return {
        get: function (options) {

            var
                deferred = $q.defer();

            angular.extend(opts, options);

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