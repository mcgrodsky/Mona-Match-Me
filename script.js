var numberOfTurns = 0;

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
    $('.selected').addClass('matched crossRotate').removeClass('selected card');///trying ot figure out how to get mona lisa photo to rotate on click
    checkEnd();
  }
}
//alert message for when you won the game - achieves
function checkEnd() {
  if ($('.matched').length == $('.card').length) {
    alert('You won in ' + numberOfTurns + ' tries!'); //turn into div on side that keeps track in real time
  }
}
//sets up to play the game - shuffles board, hides card faces, adds class of 'selected' to chosen cards, checks for a match
$(document).ready(function() {
  var cards = $('.card');
  cards = shuffleCards(cards);
  $('#holder').empty();
  cards.each(function(index, card) {
    $('#holder').prepend(card);
  });
  $('div.card').click(function() {
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
