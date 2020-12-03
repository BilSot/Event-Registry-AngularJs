'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, GravatarUrlBuilderService) {
        $scope.user = {
            userName: '',
            name: '',
            emailAddress: '',
            password: '',
            bio: ''
        };
        $scope.getGravatarUrl = GravatarUrlBuilderService.buildGravatarUrl($scope.user.emailAddress);
        $scope.$watch('user.emailAddress', function(newValue, oldValue){

            //$scope.getGravatarUrl = GravatarUrlBuilderService.buildGravatarUrl(newValue);
        });
    }
);
