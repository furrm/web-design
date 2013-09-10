/**
 * Created with JetBrains WebStorm.
 * User: furrm
 * Date: 28/08/2013
 * Time: 06:54
 * To change this template use File | Settings | File Templates.
 */

'use strict';

angular.module('app.components', [])
    .directive('offcanvasmenu', function () {
        return{
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {menuState: '='},
            templateUrl: 'templates/off-canvas-menu.html',
            link: function (scope, element, attrs, controller) {

//                var inactiveCssClass = 'k-menu k-menu-vertical k-menu-left';
                var inactiveCssClass = 'k-menu k-menu-vertical k-menu-left k-menu-open';  // force open for dev
                var activeCssClass = 'k-menu k-menu-vertical k-menu-left k-menu-open';


                //set initial state.
                attrs.$set('class', inactiveCssClass);

                scope.$watch('menuState', function (newVal, oldVal) {
                    if (newVal !== oldVal) {
                        //alert('You changed the menuState from ' + oldVal + ' to ' + newVal);

                        if (newVal === true)
                            attrs.$set('class', activeCssClass)
                        else {
                            attrs.$set('class', inactiveCssClass)

                        }
                    }
                });


            },
            controller: function ($scope) {
                $scope.toggleMe = function () {
                    alert('Hello!!');

                }
            }


        };
    })
    .directive('offCanvas', function () {
        return{
            restrict: 'E',
            templateUrl: 'templates/components/off-canvas.html',
            controller: 'AppCtrl',
            transclude: true,
            replace: true
        }
    })
    .directive('menuHeader', function () {
        return{
            restrict: 'E',
            templateUrl: 'templates/components/menu-header.html'
        }
    })
    .directive('menuSide', function () {
        return{
            restrict: 'E',
            templateUrl: 'templates/components/menu-side.html'
//            controller:function(){
//                this.doSomething = function(){
//                    alert('Doing Something =)');
//                };
//            }
        }
    })
    .directive('menuSearch',function () {
        return{
            restrict: 'E',
            templateUrl: 'templates/components/menu-search.html'
        }
    }).directive('menuSearchResults',function () {
        return{
            restrict: 'E',
            templateUrl: 'templates/components/menu-search-results.html',
            require: '^offCanvas',  // use the offCanvas controller
            link: function (scope, element, attribute, offCanvasCtrl) {

//                scope.switch = function (args) {
//                    offCanvasCtrl.switchMatter(args);
//                }

            }

        }
    }).directive('panel', function () {
        return{
            restrict: 'E',
            replace: 'true',
            scope: true,
            templateUrl: 'templates/components/panel.html',
            require: '^offCanvas',
            link: function (scope, element, attribute, appCtrl) {

            },
            controller: '@',
            name: 'ctrl'
        }
    })
    .controller('MatterInfoCtrl', function ($scope) {
        $scope.panelName = 'Matter Info';

        $scope.buttonClicked = 'Click my button ;-)';

        $scope.panelMenuClick = function (args) {
            switch (args) {
                case 'dataTable':
                    $scope.buttonClicked = 'Data table clicked!!';
                    break;
                case 'chart':
                    $scope.buttonClicked = 'Ok, Ill render a chart.';
                    break;
                case 'refresh':
                    $scope.buttonClicked = 'Gonna refresh...';
                    break;
                default:
                    $scope.buttonClicked = 'Not sure what was clicked, but the args = ' + args;
            }

        }
    })
    .controller('MatterOverviewLifeToDateCtrl', function ($scope) {
        $scope.panelName = 'Matter Overview Life To Date';

        $scope.buttonClicked = 'Click my button ;-)';

        $scope.panelMenuClick = function (args) {
            switch (args) {
                case 'dataTable':
                    $scope.buttonClicked = 'Data table clicked!!';
                    break;
                case 'chart':
                    $scope.buttonClicked = 'Ok, Ill render a chart.';
                    break;
                case 'refresh':
                    $scope.buttonClicked = 'Gonna refresh...';
                    break;
                default:
                    $scope.buttonClicked = 'Not sure what was clicked, but the args = ' + args;
            }

        }
    })
    .controller('WorkInProgressCtrl', function ($scope) {
        $scope.panelName = 'Work In Progress';

        $scope.buttonClicked = 'Click my button ;-)';

        $scope.panelMenuClick = function (args) {
            switch (args) {
                case 'dataTable':
                    $scope.buttonClicked = 'Data table clicked!!';
                    break;
                case 'chart':
                    $scope.buttonClicked = 'Ok, Ill render a chart.';
                    break;
                case 'refresh':
                    $scope.buttonClicked = 'Gonna refresh...';
                    break;
                default:
                    $scope.buttonClicked = 'Not sure what was clicked, but the args = ' + args;
            }

        }
    })
    .controller('UnpaidInvoicesCtrl', function ($scope) {
        $scope.panelName = 'Unpaid Invoices';

        $scope.buttonClicked = 'Click my button ;-)';

        $scope.panelMenuClick = function (args) {
            switch (args) {
                case 'dataTable':
                    $scope.buttonClicked = 'Data table clicked!!';
                    break;
                case 'chart':
                    $scope.buttonClicked = 'Ok, Ill render a chart.';
                    break;
                case 'refresh':
                    $scope.buttonClicked = 'Gonna refresh...';
                    break;
                default:
                    $scope.buttonClicked = 'Not sure what was clicked, but the args = ' + args;
            }

        }
    })

;
