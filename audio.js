const sounds = {
  rain: "audio/rain.mp3",
  cafe: "audio/cafe.mp3",
  city: "audio/city.mp3",
  beach: "audio/beach.mp3",
  thunder: "audio/thunder.mp3",
  breeze: "audio/breeze.mp3",
  bird: "audio/bird.mp3",
  night: "audio/night.mp3",
};

document.querySelector("#sound-btns").addEventListener("click", function (e) {
  console.log(e.target.id);
  for (let sound of Object.keys(sounds)) {
    if (e.target.id === sound) {
      let audio = new Audio(sounds[sound]);
      audio.play();
    }
  }
});
