
const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let firstCard, secondCard;
cards.forEach ((card) => {
  card.addEventListener(`click`, flipCard)
});

function flipCard() {
  this.classList.add(`flip`);

  if (!hasFlippedCard) {
      hasFlippedCard = true;
      secondCard = this;
      console.log(secondCard.attributes[1].value);
      isMatch(firstCard, secondCard);

  } else {
      hasFlippedCard = false;
      firstCard = this;
      console.log(firstCard.attributes[1].value);
  }
}

const deck = [];
cards.forEach((card) => {
  deck.push(card);
});

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
  if (card1.attributes[1].value === card2.attributes[1].value) {
    //run code confirming a match
    //code points to removeMatchedCards function
    //removeMatchedCards(card1, card2);
    console.log("cards were a match");
    endGameCounter -= 2;
    console.log(endGameCounter);
  } else {
    //run code to flip cards back over and continue game
    // function flipCard()
    console.log("Cards were not a match");
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
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
  shuffle(deck);
  startTimer();
}

function shuffle(deck) {
  let currentIndex = deck.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}

function display() {
  document.querySelector(".popup").style.display = "none";
  shuffle(deck);
  startTimer();
}

document.querySelector(".start").addEventListener("click", display);
