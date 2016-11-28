angular.module('karaokeApp')
.controller('SongsCtrl', function($scope, $http, $location, $routeParams) {

  $scope.songs = [];

  $scope.changeRoute = function() {
    $location.path('/add');
  };

  $scope.changeRouteAccount = function() {
    // goto create
    $location.path('/user');
  };

  $scope.changeRouteSongs = function() {
    // goto create
    $location.path('/songs');
  };

  $scope.changeRouteScores = function() {
    // goto create
    $location.path('/scores');
  };

  $scope.fetch = function() {
    $http.get('http://localhost:9292/songs').success(function (results) {
      $scope.songs = results;
    }).error(function(err) {
      console.log('Fetch failed; it didn\'t happen');
      console.log(err);
      });
    };

  $scope.fetch();

  $scope.showLyric = function(id) {
    // console.log(id, ' is the id')
    $location.path('/' + id );
  };

});

