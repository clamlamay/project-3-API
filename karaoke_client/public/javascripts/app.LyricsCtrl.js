angular.module('karaokeApp')
    .controller('LyricsCtrl', function($scope, $http, $location, $routeParams) {


// function ProfileCtrl($scope, $http, $routeParams) {
//     $http.get('storage/models.json').success(function(data) {
//         $scope.profile= data[$routeParams.id];
//     });

  //   $scope.fetch = function() {
  //    $http.get('http://localhost:9292/songs').success(function (results) {
  //     $scope.songs = data[$routeParams.id];
  //   }).error(function(err) {
  //     console.log('Fetch failed; it didn\'t happen');
  //     console.log(err);
  //   });
  // }

  // $scope.fetch();

  $scope.songs = [];

  $scope.fetch = function() {
    console.log($routeParams.id)
    console.log($location.id)



    $http.get('http://localhost:9292/songs/' + id).success(function (results) {
      $scope.songs = results;
    }).error(function(err) {
      console.log('Fetch failed; it didn\'t happen');
      console.log(err);
      });
    };

  $scope.fetch();


});