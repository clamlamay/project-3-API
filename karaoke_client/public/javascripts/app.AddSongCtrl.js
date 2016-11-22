angular.module('karaokeApp')
.controller('AddSongCtrl', function($scope, $http, $location) {

  $scope.messages = [
    'Add your song! Please fill out all fields.',
    'Thanks for your lyrics!'
  ];

  $scope.songs = [];

  $scope.fetch = function() {
    $http.get('http://localhost:9292/songs').success(function (results) {
      $scope.songs = results;
    }).error(function(err) {
      console.log('Fetch failed; it didn\'t happen');
      console.log(err);
    });
  }

  $scope.fetch();

  $scope.addSong = function(title, artist, lyrics) {
    $http({
      url: 'http://localhost:9292/songs/',
      method: 'POST',
      params: { title: title, artist: artist, lyrics: lyrics }
    }).success(function(results) {
      $scope.message = $scope.messages[1];
    }).error(function(err) {
      console.log('Ajax request go down da hole');
      console.log(err);
    });
  };

  $scope.changeRoute = function() {
    // goto create
    $location.path('/songs');
  }

});