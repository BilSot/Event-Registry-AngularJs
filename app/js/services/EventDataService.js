'use strict'

eventsApp.factory('EventDataService', function ($http) {
    return {
        /*getEvent: function(eventId){
            return $resource(
                'api/data/event/:id',
                {id: '@id'})
                .get({id: eventId});
        },*/
        getEvent: function (eventId) {
            return $http({
                method: 'GET',
                url: `api/data/event/${eventId}`
            })
                /*.then(function (data) {
                    return data.data;
                }, function (err) {
                    return "something went wrong----" + JSON.stringify(err);
                });*/
        },

        getAllEvents: function () {
            return $http({
                method: 'GET',
                url: 'api/data/events'
            })
                /*.then(function (data) {
                return data.data;
            }, function (err) {
                return "something went wrong----" + JSON.stringify(err);
            });*/
        }
    }
});
