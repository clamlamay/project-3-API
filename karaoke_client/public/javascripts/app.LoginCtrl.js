angular.module('karaokeApp')
  .controller('LoginCtrl', function($scope, $http, $location, $rootScope) {

  // $scope.messages = 'Please login or register.';

  $scope.loginUser = function(username, password) {
    $http({
      url: 'http://localhost:9292/users/login',
      method: 'POST',
      params: { username: username, password: password }
    }).success(function(results) {
      console.log(results);
      console.log($rootScope.api_key);
      $scope.messages = 'Welcome back, ' + username + '!' ;
      console.log('Post success.');
    }).error(function(err) {
    	$scope.messages = 'Please try again.';
    	console.log('Ajax request failed.');
    	console.log(err);
    });
  }

   $scope.changeRoute = function() {
    $location.path('/');
  };


});