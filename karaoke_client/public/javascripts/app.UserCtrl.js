angular.module('karaokeApp')
.controller('UserCtrl', function($scope, $http) {

  // Only show $rootScope.id's songs :)

  $scope.songs = [];

  $scope.fetch = function() {
    $http.get('http://localhost:9292/songs').success(function (results) {
      $scope.songs = results;
    }).error(function(err) {
      console.log('Fetch failed; it didn\'t happen');
      console.log(err);
      });
    };

  $scope.fetch();

  $scope.removeSong = function(song) {
    console.log(song.id);
    var Sure = confirm('Do you want to delete that song?');
    if (Sure) {
      $http.delete('http://localhost:9292/songs/' + song.id).success(function(result) {
        $scope.fetch(); // auto-update my list
      }).error(function(err) {
        console.log(err);
      });
    }
  };

});
