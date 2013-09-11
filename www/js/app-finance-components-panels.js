'use strict';

angular.module('app.finance.components.panels', [])
    .directive('panel', function () {
        return{
            restrict: 'E',
            replace: 'true',
            scope: true,
            templateUrl: 'templates/components/panel/panel.html',
            require: '^offCanvas',
            link: function (scope, element, attribute, appCtrl) {

            },
            controller: '@',
            name: 'ctrl'
        }
    })
    .directive('panelMatterlifetodate', function () {
        return{
            restrict: 'E',
            replace: 'true',
            scope: true,
            templateUrl: 'templates/components/panel/panel-matterlifetodate.html',
            require: '^offCanvas',
            link: function (scope, element, attribute, appCtrl) {

            },
            controller: '@',
            name: 'ctrl'
        }
    })
    .directive('panelHeader', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/components/panel/panel-header.html'

        }
    })
    .directive('panelBodyTemp', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/components/panel/panel-body-temp.html'

        }
    })
    .directive('panelBodyMatterlifetodate', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/components/panel/panel-body-matterlifetodate.html'

        }
    })
    .directive('panelFooter', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/components/panel/panel-footer.html'

        }
    })
;