//http://dna.daum.net/apis/local/ref#addr2coord

app.factory('addr2coord', function ($http, $q, config) {

    var
        url = 'http://apis.daum.net/local/geo/addr2coord',
        opts = {
            apikey: config.mapDataTypeApikey,
            q: '',
            pageno: "1",
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