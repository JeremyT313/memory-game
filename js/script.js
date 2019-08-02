function startTimer() {
  let seconds = 0;
  timer = setInterval(function() {
    seconds++;
    document.querySelector(".seconds").textContent = seconds % 60;
    document.querySelector(".minutes").textContent = parseInt(seconds / 60);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

endGameCounter = deck.length;

function isMatch(card1, card2) {
  if (card1.getAttribute("data-matchValue" === card2.getAttribute("data-matchValue"))) {
    //run code confirming a match
    //code points to removeMatchedCards function
    //removeMatchedCards(card1, card2);
    endGameCounter -= 2;
  } else {
    //run code to flip cards back over and continue game
    // function flipCard()
  }
  isEndGame(endGameCounter);

}

function removeMatchedCards(card1, card2) {
  //removes the matched cards from teh play area


}

function isEndGame(counter) {
  //checks for End of the Game
  //counter counts the cards that are taken out until it reaches the number
  //of total cards in a cam
}