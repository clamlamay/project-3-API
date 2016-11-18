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
      .when('/scores', {
        templateUrl: 'ngViews/score.html',
        controller: 'ScoreCtrl'
      })
      .when('/', {
        templateUrl: 'ngViews/home.html',
        controller: 'HomeCtrl'
      })
      .when('/user', {
        templateUrl: 'ngViews/user.html',
        controller: 'UserCtrl'
      })
      .when('/add', {
        templateUrl: 'ngViews/add.html',
        controller: 'AddSongCtrl'
      })
      .when('/songs', {
        templateUrl: 'ngViews/songs.html',
        controller: 'SongsCtrl'
      })
      .when('/users', {
        templateUrl: 'ngViews/user.html',
        controller: 'UserCtrl'
      });

    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);