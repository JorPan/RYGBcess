console.log("do somethin");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");

one.addEventListener("mouseenter", hover);
one.addEventListener("mouseleave", unhover);
two.addEventListener("mouseenter", hover);
two.addEventListener("mouseleave", unhover);
three.addEventListener("mouseenter", hover);
three.addEventListener("mouseleave", unhover);
four.addEventListener("mouseenter", hover);
four.addEventListener("mouseleave", unhover);
document.body.addEventListener("keydown", playSound);

function hover(event) {
  event.target.classList.add("hovered");
}
function unhover(event) {
  event.target.classList.remove("hovered");
}

function playSound(event) {
  switch (event.key) {
    case "q":
      const quack = document.querySelector(`.quack`);
      quack.currentTime = 0.2;
      quack.volume = 0.5;
      quack.play();
      break;
    case "w":
      const water = document.querySelector(`.water`);
      water.currentTime = 0.27;
      water.play();
      water.volume = 2;
      break;
    case "e":
      const ea = document.querySelector(`.ea`);
      ea.currentTime = 0.5;
      ea.play();
      break;
    case "r":
      const rocket = document.querySelector(`.rocket`);
      rocket.currentTime = 2;
      rocket.play();
      break;
    case "a":
      const applause = document.querySelector(`.applause`);
      applause.currentTime = 3;
      applause.volume = 0.5;
      applause.play();
      break;
    case "s":
      const swag = document.querySelector(`.swag`);
      swag.currentTime = 0.95;
      swag.volume = 0.7;
      swag.play();
      break;
    case "d":
      const doorbell = document.querySelector(`.doorbell`);
      doorbell.currentTime = 0.09;
      doorbell.play();
      break;
    case "z":
      const boing = document.querySelector(`.boing`);
      boing.currentTime = 0.15;
      boing.play();
      break;
    case "x":
      const boing2 = document.querySelector(`.boing2`);
      boing2.currentTime = 0.15;
      boing2.play();
      break;
    case "c":
      const meow = document.querySelector(`.meow`);
      meow.currentTime = 0.15;
      meow.play();
      break;
    case "v":
      const kick = document.querySelector(`.kick`);
      kick.currentTime = 0;
      kick.play();
      break;
    case "b":
      const hat = document.querySelector(`.hat`);
      hat.currentTime = 0;
      hat.volume = 0.4;
      hat.play();
      break;
    case "n":
      const snare = document.querySelector(`.snare`);
      snare.currentTime = 0;
      snare.volume = 0.9;
      snare.play();
      break;
    case "f":
      const fart = document.querySelector(`.fart`);
      fart.currentTime = 1.07;
      fart.play();
      break;
    case "m":
      const moo = document.querySelector(`.moo`);
      moo.currentTime = 0.15;
      moo.play();
      break;
    case "k":
      const koolaid = document.querySelector(`.koolaid`);
      koolaid.currentTime = 0.2;
      koolaid.play();
      break;
    case "l":
      const laser = document.querySelector(`.laser`);
      // const pitchShift = new Tone.PitchShift().toDestination();
      laser.currentTime = 1.4;
      laser.volume = 0.7;
      laser.playbackRate = 1;
      laser.play();
      break;
    case " ":
      const airhorn = document.querySelector(`.airhorn`);
      airhorn.currentTime = 1.2;
      airhorn.volume = 0.5;
      airhorn.play();
      break;
  }
}
