(function(){
    'use strict';

    angular.module('bc-notetaker')

    .controller('DashCtrl', function($scope, $rootScope, $state, Note, User){
        $scope.query = {
                       limit:  $state.params.limit || 5,
                       offset: $state.params.offset || 0,
                       tag:    $state.params.tag || '%'
                       };
        Note.list($scope.query).then(function(response){
            $scope.notes = response.data;
        });
        $scope.logout = function(){
          User.logout().then(function(response){
            $rootScope.rootuser = {};
            $state.go('tab.account');
          });
        };
    });
})();
