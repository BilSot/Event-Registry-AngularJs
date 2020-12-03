eventsApp.controller('EventListController', function EventListController($scope, EventDataService, $route) {
    //$scope.eventsList = $route.current.locals.events;
    EventDataService.getAllEvents()
        .then(response => {
            $scope.eventsList = response.data;
        },
        err => {
            console.error(err);
        });
    $scope.showMe = function (obj) {
        console.log(obj);
    }

})
