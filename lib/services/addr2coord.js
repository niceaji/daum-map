//http://dna.daum.net/apis/local/ref#addr2coord

app.factory('addr2coord', function ($http, $q) {

    var
        url = 'http://apis.daum.net/local/geo/addr2coord',
        opts = {
            apikey: dmap.dataTypeApikey,
            q: '',
            pageno: "1",
            output: 'json',
            callback: 'JSON_CALLBACK'
        };

    return {
        get: function (query, pageno) {

            var
                deferred = $q.defer();

            opts.q = query;
            opts.pageno = pageno || "1";

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