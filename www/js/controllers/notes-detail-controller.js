(function(){
    'use strict';

    angular.module('bc-notetaker')

    .controller('NotesDetailCtrl', function($scope, $rootScope, $state, Note){
        Note.findOne($state.params.noteId).then(function(response){
            $scope.moment = moment;
            $scope.note = response.data;
        });
    });
})();
