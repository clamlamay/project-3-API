console.log('Linked');

angular.module('karaokeApp', [ 'ngRoute'
]).config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false // good for anything IE9+
    })

    $routeProvider

      .when('/user', {
        templateUrl: 'ngViews/user.html',
        controller: 'UserCtrl'
      })

      .when('/', {
        templateUrl: 'ngViews/home.html',
        controller: 'HomeCtrl'
      })
      .when('/add', {
        templateUrl: 'ngViews/add.html',
        controller: 'AddSongCtrl'
      })
      .when('/songs', {
        templateUrl: 'ngViews/songs.html',
        controller: 'SongsCtrl'
      });

    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);