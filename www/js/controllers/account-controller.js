(function(){
    'use strict';

    angular.module('bc-notetaker')

    .controller('AccountCtrl', function($scope, $rootScope, $state, User){
        $scope.user = {};
        $scope.login = function(user){
            User.login(user).then(function(response){
                $rootScope.rootuser = response.data;
                $state.go('tab.dash');
                $scope.user = {};
            }, function(){
                $scope.user = {};
            });
        };
    });
})();
