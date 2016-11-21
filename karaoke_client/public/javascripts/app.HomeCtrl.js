angular.module('karaokeApp')
.controller('HomeCtrl', function($scope, $http, $location) {

  $scope.messages = 'Please login or register.';

  $scope.loginUser = function(username, password) {
    $http({
      url: 'http://localhost:9292/users/login',
      method: 'POST',
      params: { username: username, password: password }
    }).success(function(results) {
      $scope.messages = 'Welcome back, ' + username + '!' ;
    }).error(function(err) {
    	$scope.messages = 'Please try again.';
    	console.log('Ajax request failed.');
    	console.log(err);
    });
  }

  $scope.addUser = function(username, password) {
    $http({
      url: 'http://localhost:9292/users/register',
      method: 'POST',
      params: { username: username, password: password }
    }).success(function(results) {
      $scope.messages = 'Thanks for joining, ' + username + '!' ;
    }).error(function(err) {
      console.log('Ajax request failed.');
      console.log(err);
    });
  }

});