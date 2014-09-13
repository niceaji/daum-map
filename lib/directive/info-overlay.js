app.directive('infoOverlay',
    function ($compile) {

//    return function(scope, element, attrs) {
//        console.log('infoOverlay')
//    };

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'info-overlay.html',
            link: function (scope, element, attrs) {

                console.log('infoOverlay:', scope)

                $compile(element.contents())(scope);
            }
        }
    });