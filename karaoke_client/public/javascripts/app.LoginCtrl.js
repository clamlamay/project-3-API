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
      // $rootScope.key = results.user_id;
      console.log($rootScope.key);
      $scope.messages = 'Welcome back, ' + username + '!' ;
      console.log('This is working');
      console.log(status);
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