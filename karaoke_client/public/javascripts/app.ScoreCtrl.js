angular.module('karaokeApp')
.controller('ScoreCtrl', function($scope, $http, $location) {

  $scope.scores = [];

  $scope.populateList = function() {
    $http.get('http://localhost:9292/points').success(function (data) {
      $scope.scores = data;
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
