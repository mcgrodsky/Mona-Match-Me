var numberOfTurns = 0;
var seconds = 0
var timerId;
//function to shuffle the order of the cards on the page.
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
//function to check if the cards are a match or not.
function checkMatch(card1, card2) {
  var class1 = card1.attr('class');
  var class2 = card2.attr('class');
  if (class1 == class2) {
    $('.selected').addClass('matched').removeClass('selected card');
    checkEnd();
  }
}

//function to see if game is over, and if so executes some new HTML on page
function checkEnd() {
  if ($('.matched').length == $('.card').length) {
    $("h2").removeClass("timer");
    $("h1").empty();
    $(".tracker").text("You won in " + numberOfTurns + " turns, and " + seconds + " seconds! Think you can do better?");
    $("body").addClass("winningpage")
    $("#sidebar").addClass("winningdiv")
    $("#holder").empty();
  }
}
$(function(){
    $(".flyingdiv").addClass("active");
});
$(function(){
    $(".flyingdiv2").addClass("active2");
});
var updateTime = function() {
  seconds++
  $(".timer").html(seconds);
}
var startButton = function() {
  if (seconds === 0) {
    $(".timer").innerHTML = 0;
    $("#holder").removeClass("timerstop");
  }
  clearInterval(timerId)
  timerId = setInterval(updateTime, 1000)
};
//sets up to play the game - shuffles board, hides card faces, adds class of 'selected' to chosen cards, checks for a match by comparing class
$(document).ready(function() {
  $("*").dblclick(function(e){
    e.preventDefault();
  });
  var cards = $('.card');
  cards = shuffleCards(cards);
  $('#holder').empty();
  cards.each(function(index, card) {
    $('#holder').prepend(card);
  });
  $(".timerstop").bind("click", function() {
    startButton();
    $(this).unbind("click");
  })
  $('div.card').click(function() {
    $(".tracker").empty();
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
