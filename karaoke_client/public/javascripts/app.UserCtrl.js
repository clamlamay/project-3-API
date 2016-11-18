angular.module('karaokeApp')
.controller('UserCtrl', function($scope, $http) {

  $scope.messages = ['Thank you for Registering.'];

  $scope.addUser = function(username, password) {
    $http({
      url: 'http://localhost:9292/users',
      method: 'POST',
      params: { username: username, password: password }
    }).success(function(results) {
      $scope.messages = $scope.messages;
    }).error(function(err) {
      console.log('Ajax request go down da hole');
      console.log(err);
      $scope.populateList();
    });
  }

  $scope.users = [];

  $scope.populateList = function() {
    $http.get('http://localhost:9292/users').success(function (data) {
      $scope.users = data;
    }).error(function(err) {
      console.log('Fetch failed; it didn\'t happen');
      console.log(err);
    });
  }
  
  $scope.populateList();

});
