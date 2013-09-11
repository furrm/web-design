angular.module('app', ['app.finance.controllers', 'app.components', 'app.finance.components.panels', 'app.services'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/main', {
//                controller: 'MainCtrl',
                templateUrl: 'templates/content/main.html'
            })
            .when('/css', {
//                controller: 'ViewCtrl',
                templateUrl: 'templates/content/css.html'
            })
            .otherwise({redirectTo: '/main'});
    }])
    .controller('AppCtrl', function ($scope) {
        $scope.name = 'App Controller';

        // Menu specific classes
        var menuOpenCssClass = 'slide-menu slide-menu-vertical slide-menu-left slide-menu-open';
//                var menuCloseCssClass = 'slide-menu slide-menu-vertical slide-menu-left slide-menu-open'; // force open for dev
        var menuCloseCssClass = 'slide-menu slide-menu-vertical slide-menu-left';

        // main specific classes
        var mainOpenCssClass = 'main-push main-push-toright';
//                var mainCloseCssClass = 'main-push main-push-toright' // force open for dev
        var mainCloseCssClass = 'main-push';

        // mask specific classes
        var maskActiveCssClass = "main-mask main-mask-menu-open";
        var maskInactiveCssClass = "main-mask";

        var menuIsOpen = 0;

        $scope.menuCss = menuCloseCssClass;
        $scope.mainCss = mainCloseCssClass;
        $scope.maskCss = maskInactiveCssClass;

        $scope.toggleMenuState = function () {

            if (menuIsOpen) // then close it...
            {
//                       alert('Close the menu...');
                $scope.menuCss = menuCloseCssClass;
                $scope.mainCss = mainCloseCssClass;
                $scope.maskCss = maskInactiveCssClass
            } else // then open it
            {
//                        alert('Open the menu...');
                $scope.menuCss = menuOpenCssClass;
                $scope.mainCss = mainOpenCssClass;
                $scope.maskCss = maskActiveCssClass

            }

            menuIsOpen = !menuIsOpen;

        }

        var selectedMatterId = 'Nothing Selected!!';

        $scope.switchMatter = function (args) {
//                    alert(args);
            $scope.selectedMatter = args;
        }


    })
//    .controller('CacheCtrl', function ($scope) {
//
//    })
;