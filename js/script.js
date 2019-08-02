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
