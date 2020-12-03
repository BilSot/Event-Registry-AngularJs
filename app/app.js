'use strict';

// Declare app level module which depends on views, and core components
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    //$locationProvider.hashPrefix('');
    $routeProvider.when('/newEvent', {
        templateUrl: './templates/CreateNewEvent.html',
        controller: 'CreateNewEventController'
    });
    $routeProvider.when('/events', {
        templateUrl: './templates/EventList.html',
        controller: 'EventListController',
        /*resolve: {
            events: function($route, EventDataService){
                return EventDataService.getAllEvents();
            }
        }*/
    });
    $routeProvider.when('/event/:id', {
        templateUrl: './templates/EventDetails.html',
        controller: 'EventDetailsController',
        /*resolve: {
            eventInfo: function($route, EventDataService){
                return EventDataService.getEvent($route.current.pathParams.id);
            }
        }*/
    });
    $routeProvider.when('/profile', {
        templateUrl: './templates/EditProfile.html',
        controller: 'EditProfileController',
    });
    $routeProvider.otherwise({redirectTo: '/events'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
