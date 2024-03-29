const cards = document.querySelectorAll(".memory-card");
console.log(cards);
let hasFlippedCard = false;
let firstCard, secondCard;
cards.forEach(card => {
  card.addEventListener(`click`, flipCard);
});

function flipCard() {
  this.classList.add(`flip`);

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    console.log(firstCard.attributes[1].value);
    firstCard.removeEventListener("click", flipCard);
  } else {
    hasFlippedCard = false;
    secondCard = this;
    console.log(secondCard.attributes[1].value);
    secondCard.removeEventListener("click", flipCard);
    isMatch(firstCard, secondCard);
  }
}

//Need to create deck
const deck = [];
cards.forEach(card => {
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
  const finalTime = document.querySelector("#final-time");
  console.dir(document.querySelector(".minutes"));
  finalTime.innerHTML = `${document.querySelector(".minutes").textContent} minutes and ${document.querySelector(".seconds").textContent} seconds`;
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
    card1.removeEventListener("click", flipCard);

    card2.removeEventListener("click", flipCard);
    setTimeout(() => {
      // card1.hasChildNodes(".back-card").style.display = "none";
      // card1.lastChild.style.display = "none";
      card1.classList.remove('flip');
      card2.classList.remove('flip');
      setTimeout(() => {
        card1.classList.add('confirmedMatch');
        card2.classList.add('confirmedMatch');
      }, 550);

    }, 550);
  //  Need to toggle a class for making them disappear.
  } else {
    //run code to flip cards back over and continue game
    // function flipCard()
    console.log("Cards were not a match");
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
    }, 550);
    card1.addEventListener("click", flipCard);
    card2.addEventListener("click", flipCard);
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
  if (counter === 0) {
    console.log("Congratulations! You have won the game!");
    stopTimer();
    document.querySelector(".end-game").style.display = "flex";
  }
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
  const playField = document.querySelector(".play-field");
  playField.innerHTML = "";
  deck.forEach((card) => {
    console.log(card);
    playField.appendChild(card);
  });
  return deck;
  //After deck has been shuffled we need to make sure the innerHTML of the play-field is set equal
  //to empty string ("") and then do a for each method in the deck array and inner html it with all of its properties.
}

function startGame() {
  document.querySelector(".start-game").style.display = "none";
  shuffle(deck);
  startTimer();
}

function reset() {
  let div = document.querySelectorAll("div");
  div.forEach(div => {
    div.classList.remove("flip");
  });
  document.querySelector(".end-game").style.display = "none";
  shuffle(deck);
  stopTimer()
  startTimer();
  cards.forEach(card => {
    card.addEventListener(`click`, flipCard);
  });
  endGameCounter = deck.length;
}

document.querySelector(".start").addEventListener("click", startGame);
document.querySelector(".end").addEventListener("click", reset);
document.querySelector(".reset-btn").addEventListener("click", reset);
