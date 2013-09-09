angular.module('app', ['app.finance.controllers', 'app.components'])
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


//        var menu = {
//            menuState:false,
//            toggle: function(){
//                    if(!this.menuState){this.menuState = true;}else{this.menuState = false;}
//            }
//        };

//        $scope.menu = menu;

//        $scope.isActive = false;

//        $scope.toggleMenu = function () {
//            $scope.isActive = !$scope.isActive;
//        };

        var selectedMatterId = 'Nothing Selected!!';

        $scope.switchMatter = function(){
                  alert('arg');
        }

        $scope.selectedMatter = selectedMatterId;

    });