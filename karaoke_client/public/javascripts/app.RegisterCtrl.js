angular.module('karaokeApp')
  .controller('RegisterCtrl', function($scope, $http, $location, $rootScope) {

  $scope.messages = 'Please login or register.';

  $scope.addUser = function(username, password) {
    $http({
      url: 'http://localhost:9292/users/register',
      method: 'POST',
      params: { username: username, password: password}
    }).success(function(results) {
      console.log(results.id);
      console.log(results.api_key)
      $rootScope.apiKey = results.api_key;
      $rootScope.id = results.id;
      $rootScope.user = results.username;
      console.log("Current user: " + $rootScope.user);
      $scope.messages = 'Thanks for joining, ' + username + '!' ;

      $http({
          url: 'http://localhost:9292/points/',
          method: 'POST',
          params: { score: 0, account_id: $rootScope.id }
        }).success(function(results) {
          $rootScope.points = results.score;
          console.log(results.account_id);
          console.log(results.score);
        }).error(function(err) {
          console.log('Ajax request failed.');
          console.log(err);
        });
      
    }).error(function(err) {
      console.log('Ajax request failed.');
      console.log(err);
    });
  };

  $scope.changeRoute = function() {
    $location.path('/register');
  };

});