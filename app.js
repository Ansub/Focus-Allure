const incButton = document.querySelector(".inc");
const decButton = document.querySelector(".dec");
const startButton = document.querySelector(".start-btn");
const resetButton = document.querySelector(".reset-btn");

let min = 24;
let sec = 59;
//  Increment the value of the counter
incButton.addEventListener("click", function () {
  min++;
  document.querySelector(".mins").innerHTML = min;
  return min;
});

//  Decrement the value of the counter
decButton.addEventListener("click", function () {
  min--;
  document.querySelector(".mins").innerHTML = min;
  return min;
});

//  On Clicking the Start Button
startButton.addEventListener(
  "click",
  function () {
    let counter = setInterval(function () {
      document.querySelector(".secs").innerHTML = sec;
      sec--;
      if (sec < 0) {
        sec = 60;
        min--;
        document.querySelector(".mins").innerHTML = min;
        if (min === 0) {
          clearInterval(counter);
        }
      }
    }, 1000);
  },
  { once: true }
);

resetButton.addEventListener(
  "click",
  function () {
    min = 25;
    sec = 60;
    document.querySelector(".mins").innerHTML = min;
    document.querySelector(".secs").innerHTML = "00";
  },
  { once: true }
);
