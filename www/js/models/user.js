(function(){
  'use strict';

  angular.module('bc-notetaker')
    .factory('User', function($http, origin){

      function register(user){
        return $http.post(origin + '/register', user);
      }

      function login(user){
        return $http.post(origin + '/login', user);
      }

      function logout(){
        return $http.delete(origin + '/logout');
      }

      return {register:register, login:login, logout:logout};
    });
})();
