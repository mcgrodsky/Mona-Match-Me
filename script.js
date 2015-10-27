var numberOfTurns = 0;
var seconds = 0
var timerId;
//function to shuffle the order of the cards on the page. variables "cards" is defined on line 34
function shuffleCards(cards) {
  var currentIndex = cards.length;
  var tempValue;
  var randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * cards.length);
    tempValue = cards[currentIndex - 1];
    cards[currentIndex - 1] = cards[randomIndex];
    cards[randomIndex] = tempValue;
    currentIndex--;
  }
  return cards;
}
//function to check it the cards are a match or not. Each card is assigned a class of their suite, and this function is comparing the class names to determine if its a match or not.
function checkMatch(card1, card2) {
  var class1 = card1.attr('class');
  var class2 = card2.attr('class');
  if (class1 == class2) {
    $('.selected').addClass('matched crossRotate').removeClass('selected card'); ///trying ot figure out how to get mona lisa photo to rotate on click
    checkEnd();
  }
}
//alert message for when you won the game - set numberOfTurns to 0 at start, numberOfTurns being counted every time a card is clicked.
function checkEnd() {
  if ($('.matched').length == $('.card').length) {
    $(".tracker").text("You won in " + numberOfTurns + " turns! Think you can do better?");
    $("body").addClass("winningpage")
    $("#holder").empty(); //this should be the last inserted div only inserted at end of game to print number of tries.
  }
}
var updateTime = function() {
  seconds++
  $(".timer").html(seconds);
}
var startButton = function() {
  if (seconds === 0) {
    $(".timer").innerHTML = 0;
  }
  clearInterval(timerId)
  timerId = setInterval(updateTime, 1000)
};
//sets up to play the game - shuffles board, hides card faces, adds class of 'selected' to chosen cards, checks for a match by comparing class (hardcoded into html)
$(document).ready(function() {
  var cards = $('.card');
  cards = shuffleCards(cards);
  $('#holder').empty();
  cards.each(function(index, card) {
    $('#holder').prepend(card);
  });
  $('div.card').click(function() {
    $(".tracker").empty();
    $(".tracker").addClass("timer");
    $(".tracker").on("click", startButton); //insert timer into lower div to keep track of how long it takes to win game
    if ($('.selected').length == 2) {
      $('.selected').removeClass('selected');
      $(this).children().addClass('selected');
    } else if ($('.selected').length == 1) {
      numberOfTurns++;
      $(this).children().addClass('selected');
      var card1 = $('.selected').first().parent();
      var card2 = $('.selected').last().parent();
      checkMatch(card1, card2);
    } else {
      $(this).children().addClass('selected');
    }
  });
  //reset button to reload page
  $('#reset').click(function(e) {
    e.preventDefault();
    window.location.reload();
  });

});
