'use strict'

eventsApp.directive('eventThumbnail', function(){
    return{
        restrict: 'E',
        replace: true,
        scope: {
            'eventInfo': ' =eventInfoDir',
            'customClick': '&'
        },
        templateUrl: '../../templates/EventThumbnail.html',
        link: function(scope, attr, element){
            //console.log(element);
        },
        controller: ['$scope', function EventThumbnailController($scope){
            $scope.triggerClick = function() {
                this.customClick({test: {name: 'Biljana', age: 35}});
            }
        }]
    }
})
