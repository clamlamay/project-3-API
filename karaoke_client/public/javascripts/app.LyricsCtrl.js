angular.module('karaokeApp')
  .controller('LyricsCtrl', function($scope, $http, $location, $routeParams) {

    var currentId = $routeParams.id;

    $scope.lyrics = [];

    $scope.fetch = function() {
      console.log(currentId)
      $http.get('http://localhost:9292/songs/' + currentId).success(function (results) {
        console.log(results.lyrics)
        $scope.lyrics = results.lyrics;
      }).error(function(err) {
        console.log('Fetch failed; it didn\'t happen');
        console.log(err);
      });
    };

  $scope.fetch();

});