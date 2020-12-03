'use strict'

eventsApp.directive('collapsible', function(){
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<div><h4 class="well-title" ng-click="toggleSessionContent()">{{title}}</h4><div ng-transclude ng-show="collapsed"></div></div>',
        scope: {
            title: '@'
        },
        controller: function($scope){
            $scope.collapsed = false;

            $scope.toggleSessionContent = function(){
                $scope.collapsed = !$scope.collapsed;
            }
        }
    }
})
