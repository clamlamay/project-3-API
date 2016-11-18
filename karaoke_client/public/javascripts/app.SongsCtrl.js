angular.module('karaokeApp')
.controller('SongsCtrl', function($scope, $http, $location) {

  $scope.songs = [];

  $scope.changeRoute = function() {
    // goto create
    $location.path('/add');
  }

  $scope.fetch = function() {
    $http.get('http://localhost:9292/songs').success(function (results) {
      $scope.songs = results;
    }).error(function(err) {
      console.log('Fetch failed; it didn\'t happen');
      console.log(err);
    });
  }

  $scope.fetch();

});