(function(){
    'use strict';

    angular.module('bc-notetaker')

    .controller('NotesCtrl', function($scope, $rootScope, $state, Note){
        $scope.query = {
                       limit:  $state.params.limit  || 100,
                       offset: $state.params.offset || 0,
                       tag:    $state.params.tag    || '%'
                       };
        Note.list($scope.query).then(function(response){
            $scope.notes = response.data;
        });
    });
})();
