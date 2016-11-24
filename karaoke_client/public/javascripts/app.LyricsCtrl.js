angular.module('karaokeApp')
  .controller('LyricsCtrl', function($scope, $http, $location, $routeParams, $rootScope) {

    var currentId = $routeParams.id;
    console.log($rootScope.id);

    $scope.longestWord = "";
    $scope.lyricsGame = "";

    $scope.first = "";
    $scope.second = "";

    $scope.fetch = function() {
      console.log(currentId)
      $http.get('http://localhost:9292/songs/' + currentId).success(function (results) {
        var lyrics = results.lyrics;

        var lyricsArray = lyrics.split(" ");
        console.log(lyricsArray);

        var longestWord = 0;
        var missingWord = null;

        for (var i = 0; i < lyricsArray.length; i++) {
          if (lyricsArray[i].length > longestWord) {
              longestWord = lyricsArray[i].length 
              missingWord = lyricsArray[i]
          };
        };

        missingWord = missingWord.replace('.', '');

        console.log(lyrics);
        console.log("Missing word: " + missingWord);

        $scope.longestWord = missingWord
        $scope.lyricsGame = lyrics.replace(missingWord, '');


        var index = lyrics.indexOf(missingWord);  // Gets the first index where a space occours
        var firstPart = lyrics.substr(0, index); // Gets the first part
        var secondPart = lyrics.substr(index + missingWord.length);

        $scope.first = firstPart;
        $scope.second = secondPart;


      }).error(function(err) {
        console.log('Fetch failed; it didn\'t happen');
        console.log(err);
      });
    };

    $scope.fetch();

    $scope.guessLyric = function(guess) {
      console.log("This is their guess: " + guess);
      var answer = $scope.longestWord;
      if ( guess.toLowerCase() === answer.toLowerCase() ){
          console.log("You're so smart :) ");
          $rootScope.points++;
          console.log($rootScope.points);
          
          $http({
            url: 'http://localhost:9292/points/' + $rootScope.id,
            method: 'PATCH',
            params: { score: $rootScope.points }
          }).success(function(results) {
            console.log("This is the user's new score: " + results.score);
          }).error(function(err) {
            console.log('Score updated Ajax request failed.');
            console.log(err);
          });

      } else {
          console.log("Boo, you suk.");
          $rootScope.points--;
          console.log($rootScope.points);
          
          $http({
            url: 'http://localhost:9292/points/' + $rootScope.id,
            method: 'PATCH',
            params: { score: $rootScope.points }
          }).success(function(results) {
            console.log("This is the user's new score: " + results.score);
          }).error(function(err) {
            console.log('Ajax request failed.');
            console.log(err);
          });
      }
    };

});