'use strict';

var app = angular.module('MapApp', []);

app.controller('InfoCtrl', function ($scope, $rootScope, coord2addr) {

    $rootScope.$on('mapClick', function(event, lat, lng) {

        console.log(lat, lng);
        coord2addr.get(lat, lng)
            .then(function(data) {

                console.log(222, data);
            });

    });
    $scope.addr = '용산구 한남동'

//    $window.opener.callbackMapWindow('iiiii');
});

