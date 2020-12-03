'use strict';

eventsApp.controller('EventDetailsController', function EventDetailsController($scope, EventDataService, $routeParams, $route) {
    $scope.sortSessionsBy = 'name';
    //$scope.eventInfo = $route.current.locals.eventInfo;

    /*$scope.eventInfo = EventDataService.getEvent($routeParams.id)
        .$promise.then(response => {
            $scope.eventInfo = response;
        }).catch(error => {
            console.warn("something went wrong----" + JSON.stringify(error));
        })*/
    EventDataService.getEvent($routeParams.id,)
        .then(response => $scope.eventInfo = response.data,
            err => console.error(err));

    $scope.addVote = function (session) {
        session.upVoteCount++;
    }

    $scope.removeVote = function (session) {
        if (session.upVoteCount > 0) {
            session.upVoteCount--;
        }
    }
});
