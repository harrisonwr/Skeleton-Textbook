(function(){
  'use strict';

  angular.module('textbook', ["ui.router", "firebase"])
  .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/app/partials/home.html',
        controller: function($scope, $firebase, FirebaseRoot) {

        }
    });
  })

  .constant('FirebaseRoot', 'https://harrison-testbook.firebaseio.com/');
})();
