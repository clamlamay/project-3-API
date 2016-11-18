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
      // .when('/', {
      //   templateUrl: 'ngViews/home.html',
      //   controller: 'PostsCtrl'
      // })
      // .when('/addSong', {
      //   templateUrl: 'ngViews/create.html',
      //   controller: 'SongCreateCtrl'
      // })
      // .when('/admin', {
      //   templateUrl: 'ngViews/admin.html',
      //   controller: 'AdminDeleteCtrl'
      // })
      .when('/', {
        templateUrl: 'ngViews/user.html',
        controller: 'UserCtrl'
      });
      // .when('/play', {
      //   templateUrl: 'ngViews/dogs.html',
      //   controller: 'PlayCtrl'
      // });

    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);