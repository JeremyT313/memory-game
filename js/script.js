
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

document.querySelector(".start").addEventListener("click", display);

function shuffle(cards) {
  var currentIndex = cards.length,
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
