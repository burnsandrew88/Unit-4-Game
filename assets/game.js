// Game Ready Function

$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    $('#randomNumber').text(Random);
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    // Game Reset

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        $('#randomNumber').text(Random);
        var num1 = Math.floor(Math.random() * 11 + 1);
        var num2 = Math.floor(Math.random() * 11 + 1);
        var num3 = Math.floor(Math.random() * 11 + 1);
        var num4 = Math.floor(Math.random() * 11 + 1);
        userScore = 0;
        $('#totalScore').text(userScore);
    }

    function woo(){
        alert ("You Won!");
        wins++;
        $('#numberWins').text(wins);
        reset();

    }

    function loser(){
        alert ("You Lost!");
        losses--;
        $('#numberLosses').text(losses);
        reset ();
    }

    // On Click Functions for jewels
    $('#RedRupee').on ('click', function(){
        userScore = userScore + num1;
        console.log("New userScore= " + userScore);
        $('#totalScore').text(userScore); 
              //sets win/lose conditions
            if (userScore == Random){
              woo();
            }
            else if ( userScore > Random){
              loser();
            }   
      }); 
      
      $('#BlueRupee').on ('click', function(){
        userScore = userScore + num2;
        console.log("New userScore= " + userScore);
        $('#totalScore').text(userScore); 
              //sets win/lose conditions
            if (userScore == Random){
              woo();
            }
            else if ( userScore > Random){
              loser();
            }   
      }); 
      $('#GreenRupee').on ('click', function(){
        userScore = userScore + num3;
        console.log("New userScore= " + userScore);
        $('#totalScore').text(userScore); 
              //sets win/lose conditions
            if (userScore == Random){
              woo();
            }
            else if ( userScore > Random){
              loser();
            }   
      }); 
      $('#GoldRupee').on ('click', function(){
        userScore = userScore + num4;
        console.log("New userScore= " + userScore);
        $('#totalScore').text(userScore); 
              //sets win/lose conditions
            if (userScore == Random){
              woo();
            }
            else if ( userScore > Random){
              loser();
            }   
      }); 
    
});

// attempted to code in a button that would play an mp3 but ran out of time. Will do this after this is submitted. Very fun! 
































