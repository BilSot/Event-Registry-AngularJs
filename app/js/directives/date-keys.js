'use strict'

eventsApp.directive('dateKeys', function(){
    return {
        restrict: 'A',
        scope: {
            'dateKeys': '='
        },
        controller: function($scope){
            $scope.localTestAttr = '';
        },
        link: function($scope, element, attr, controller){
            element.on('keydown', function(event){
                if($scope.dateKeys === "Test Attribute"){
                    $scope.localTestAttr = "Biljana";
                }
                console.log($scope);
                if(!isNumericKeyCode(event.keyCode) &&
                    !isForwardSlashKeyCode(event.keyCode) &&
                    !isNavigationKeycode(event.keyCode)){
                    event.preventDefault();
                }
                return true;
            });
        }
    }

    function isNumericKeyCode(keyCode) {
        return (keyCode >= 48 && keyCode <=57)
            || (keyCode >= 96 && keyCode <= 105);
    }
    function isForwardSlashKeyCode(keyCode) {
        return keyCode === 191;
    }
    function isNavigationKeycode(keyCode) {
        switch(keyCode) {
            case 8: //backspace
            case 35: //end
            case 36: //home
            case 37: //left
            case 38: //up
            case 39: //right
            case 40: //down
            case 45: //ins
            case 46: //del
                return true;
            default:
                return false;
        }
    }
})
