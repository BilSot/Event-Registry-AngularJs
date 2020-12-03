'use strict'

eventsApp.directive('voteSession', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../../templates/VoteSession.html',
        scope: {
            'upvote': '&',
            'downvote': '&',
            'count': '='
        }
    }
})
