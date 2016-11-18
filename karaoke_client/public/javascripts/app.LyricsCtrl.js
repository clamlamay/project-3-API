angular.module('karaokeApp')
    .controller('LyricsCtrl', function($scope, $http, $routeParams) {


// function ProfileCtrl($scope, $http, $routeParams) {
//     $http.get('storage/models.json').success(function(data) {
//         $scope.profile= data[$routeParams.id];
//     });

    $scope.fetch = function() {
     $http.get('http://localhost:9292/songs').success(function (results) {
      $scope.songs = data[$routeParams.id];
    }).error(function(err) {
      console.log('Fetch failed; it didn\'t happen');
      console.log(err);
    });
  }

  $scope.fetch();
});