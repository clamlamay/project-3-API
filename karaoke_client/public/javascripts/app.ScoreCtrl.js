angular.module('karaokeApp')
.controller('ScoreCtrl', function($scope, $http, $location) {

  $scope.scores = [];

  $scope.populateList = function() {
    $http.get('http://localhost:9292/points').success(function (data) {
      $scope.scores = data;
      // var highToLow = $scope.scores;
      // highToLow.sort(function(a, b){
      //   return b.score-a.score
      // })
    }).error(function(err) {
      console.log('Fetch failed; it didn\'t happen');
      console.log(err);
    });
  }
  $scope.populateList();

  $scope.changeRoute = function() {
    // goto create
    $location.path('/scores');
  };

});
