(function(){
    'use strict';

    angular.module('bc-notetaker')

    .controller('NotesDetailCtrl', function($scope, $rootScope, $state, Note){
        var noteId = $state.params.noteId;
        $scope.moment = moment;
        getNote();

        function getNote(){
          Note.findOne(noteId).then(function(response){
              $scope.note = response.data;
          });
        }

        $scope.snap = function(){
          var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
          };

          navigator.camera.getPicture(success, error, options);
        };

        $scope.choose = function(){
          var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
          };

          navigator.camera.getPicture(success, error, options);
        };

        function success(b64){
          Note.addPhoto(noteId, b64).then(function(response){
            navigator.notification.alert('photo saved', function(){});
            getNote();
          });
        }

        function error(msg){
          console.log(msg);
        }
    });
})();
