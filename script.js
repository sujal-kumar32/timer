window.onload = function () {
  var startButton = document.getElementById("startButton");
  startButton.addEventListener("click", function () {
    var duration = 2 * 60; // 2 minutes in seconds
    var display = document.getElementById("timer");
    startTimer(duration, display);
  });
};

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  var interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = "Time's up!";
    }
  }, 1000);
}
