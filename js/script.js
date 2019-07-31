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
