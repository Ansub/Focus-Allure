# Learn.md

let's learn how to build Focus-Allure, step by step (you will really enjoy it)

###  Step 1: Design

- every website starts with a good design language, i tried to do the same with Focus-Allure, so i picked the colors based on honey bee accent. this actually brings a lot of meaning to your project. i choosed yellow and black accent because i wanted to show that Focus-Allure can basically give someone honey-bee like focus. and did the same thing with the logo aswell. here is the figma desgin you can see on how i started it's prototyping [Figma File](https://www.figma.com/community/file/1112638902317321125)


### Step 2: Development 

so for making this thing work we need two things: 

1. a way to start and stop counter and call API for random quote.
2. a way to play sounds on button click


let's solve problem number one: 

``` javascript
startButton.addEventListener("click", () => {
  counter = setInterval(function updateCountDown() {
    let min = Math.floor(time / 60);
    let seconds = time % 60;
    time--;

    countdown.innerHTML = `${min}:${seconds}`;
  }, 1000);

  let quote = document.getElementById("quote");

  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => (quote.innerText = data.content));
});
```

here we are simply triggering two things on clicking start button, first is to display the code and second is to display the quote. we solved that by using the addEventListener function.

now in order to stop the timer we are using a function where we are using clearinterval() and also reseting the values. 

``` javascript

resetButton.addEventListener("click", () => {
  clearInterval(counter);
  min = 25;
  time = min * 60;
  countdown.innerHTML = "25:00";
  quote.innerText = "";
});

```

so we are done with problem number 1, let's come to problem number two which is how to start and stop the soundscapes. so to make the code little i have used something which is called (https://javascript.info/event-delegation)[Event Delegation]


``` javascript 
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

```
all this is doing is that it is playing the sounds when the button is clicked, and now below this we have pauseAudio function which pauses audio when clicked.

``` javascript
function pauseAudio() {
  for (let sound of Object.keys(sounds)) {
    sounds[sound].pause();
  }
  for (let button of buttonElements) {
    button.firstChild.classList.remove("active");
  }
}

```

and rest is simple css which you can see in styles.css and also there is responsive.css that is making the the website responsive using @media queries. 

thanks a lot for making it to the end, i hope that you have found some valuable lessons from it.
