angular.module('karaokeApp')
  .controller('RegisterCtrl', function($scope, $http, $location) {

  // $scope.messages = 'Please login or register.';

  $scope.addUser = function(username, password) {
    $http({
      url: 'http://localhost:9292/users/register',
      method: 'POST',
      params: { username: username, password: password }
    }).success(function(results) {
      console.log(results)
      $scope.messages = 'Thanks for joining, ' + username + '!' ;
    }).error(function(err) {
      console.log('Ajax request failed.');
      console.log(err);
    });
  }

  $scope.changeRoute = function() {
    $location.path('/register');
  };

});