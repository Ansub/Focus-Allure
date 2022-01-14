const rain = new Audio("audio/rain.mp3");
const cafe = new Audio("audio/cafe.mp3");
const city = new Audio("audio/city.mp3");
const beach = new Audio("audio/beach.mp3");
const thunder = new Audio("audio/thunder.mp3");
const breeze = new Audio("audio/breeze.mp3");
const bird = new Audio("audio/bird.mp3");
const night = new Audio("audio/night.mp3");

const sounds = {
  rain,
  cafe,
  city,
  beach,
  thunder,
  breeze,
  bird,
  night,
};
const buttonElements = document.getElementsByClassName("sound-button");

document.querySelector("#sound-btns").addEventListener("click", function (e) {
  for (let sound of Object.keys(sounds)) {
    if (e.target.id === sound) {
      sounds[sound].play();
    }
  }

  for (let button of buttonElements) {
    if (e.target.id === button.firstChild.id) {
      button.firstChild.classList.add("active");
    }
  }
});

function pauseAudio() {
  for (let sound of Object.keys(sounds)) {
    sounds[sound].pause();
  }
  for (let button of buttonElements) {
    button.firstChild.classList.remove("active");
  }
}
