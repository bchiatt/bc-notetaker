(function(){
  'use strict';

  angular.module('bc-notetaker')
    .factory('Note', ['$http', 'origin', function($http, origin){

      function list(query){
        return $http.get(origin + '/notes?limit=' + query.limit + '&offset=' + query.offset + '&tag=' + query.tag);
      }

      function remove(id){
        return $http.delete(origin + '/notes/' + id);
      }

      function findOne(id){
        return $http.get(origin + '/notes/' + id);
      }

      function addPhoto(id, buf){
        return $http.put(origin + '/notes/' + id, {buf: buf});
      }

      return {list:list, remove:remove, findOne:findOne, addPhoto:addPhoto};
    }]);
})();
