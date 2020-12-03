'use strict'

eventsApp.controller('CreateNewEventController', function CreateNewEventController($scope, $location){
    $scope.dateRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    $scope.test = "Test Attribute";

    $scope.saveEvent = function(eventInfo, form){
        console.log(form.date);
    }

    $scope.cancel = function(){
        $location.url('/');
    }
})
