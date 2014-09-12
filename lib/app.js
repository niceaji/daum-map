'use strict';

var app = angular.module('MapApp', []);

app.controller('InfoCtrl',
    function ($scope, $rootScope, coord2addr, addr2coord) {

        var marker = '';

        $rootScope.$on('mapClick', function (event, lat, lng) {

            console.log(lat, lng);

            if (marker) {
                marker.setVisible(false);
            }
            marker = dmap.putMarker(lat, lng);

            coord2addr.get(lat, lng)
                .then(function (data) {
                    console.log(data);
                });

        });

        $scope.searchAddr = function () {

            if (!$scope.query) {
                $scope.isSearchResult = false;
                return;
            }

            addr2coord.get($scope.query, 1)
                .then(function (data) {
                    console.log(data.channel);

                    $scope.items = data.channel.item;
                    if($scope.items.length > 0) {
                        $scope.isSearchResult = true;
                    }
                    else {
                        $scope.isSearchResult = false;
                    }

                });

            console.log(1)


        };


//    $window.opener.callbackMapWindow('iiiii');
    });

