(function(){
    'use strict';
    angular.module('bc-notetaker', ['ionic'])

    .run(function($ionicPlatform){
      $ionicPlatform.ready(function(){
        if(window.cordova && window.cordova.plugins.Keyboard){
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar){
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider, $httpProvider){
      $httpProvider.defaults.withCredentials = true;
      $stateProvider

        .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
        })

        .state('tab.dash', {
          url: '/dash',
          views: {
            'tab-dash': {
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl'
            }
          }
        })

        .state('tab.notes', {
          url: '/notes?tag',
          views: {
            'tab-notes': {
              templateUrl: 'templates/tab-notes.html',
              controller: 'NotesCtrl'
            }
          }
        })
        .state('tab.note-detail', {
          url: '/notes/{noteId}',
          views: {
            'tab-notes': {
              templateUrl: 'templates/note-detail.html',
              controller: 'NotesDetailCtrl'
            }
          }
        })

        .state('tab.account', {
          url: '/account',
          views: {
            'tab-account': {
              templateUrl: 'templates/tab-account.html',
              controller: 'AccountCtrl'
            }
          }
        });

      $urlRouterProvider.otherwise('/tab/dash');

    })
    // #todo only used during development; remove for production
    .run(['$rootScope', '$http', 'origin', function($rootScope, $http, origin){
      $http.get(origin + '/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);

})();
