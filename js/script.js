
const cards = document.querySelectorAll(".memory-card");
let hasFlipped = false;
let firstCard, secondCard;
function flipCard() {
  this.classList.add(`flip`);

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    console.log({ hasFlippedCard, firstCard });
  }
}
cards.forEach(card => card.addEventListener(`click`, flipCard));

let deck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

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

function startGame() {
  shuffle();
  startTimer();
}

function shuffle(cards) {
  let currentIndex = cards.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
  return cards;
}

function display() {
  document.querySelector(".popup").style.display = "none";
  shuffle();
  startTimer();
}

document.querySelector(".start").addEventListener("click", display);
console.log(shuffle(cards));
