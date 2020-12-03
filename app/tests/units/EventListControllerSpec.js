'use strict';

describe('EventListController', function() {
    let $controllerConstructor, scope, mockEventData, $httpMock;

    beforeEach(module('eventsApp'));

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        $controllerConstructor = $controller;
        $httpMock = $httpBackend;
        scope = $rootScope.$new();
        mockEventData = jasmine.createSpyObj('mockEventData', ['getAllEvents', 'getEvent']);
    }));

    beforeAll(function(){});
    afterAll(function(){});

    it('should set the scope events to the result of eventData.getAllEvents', function() {
        const mockEvents = {};
        $controllerConstructor("EventListController",
            {$scope: scope, EventDataService: mockEventData});

        //$httpMock.expectGET( './templates/EventList.html').respond(200, mockEvents);
        mockEventData.getAllEvents();
        //$httpMock.flush();

        expect(scope.eventsList).toEqual(mockEvents);
    })
});
