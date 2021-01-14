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
    case "t":
      const time = document.querySelector(`.time`);
      time.currentTime = 16;
      time.play();
      break;
    case "y":
      const yell = document.querySelector(`.yell`);
      yell.currentTime = 0.3;
      yell.play();
      break;
    case "u":
      const hey = document.querySelector(`.hey`);
      hey.currentTime = 0.6;
      hey.play();
      break;
    case "i":
      const meseks = document.querySelector(`.meseks`);
      meseks.currentTime = 0.1;
      meseks.volume = 0.7;
      meseks.play();
      break;
    case "o":
      const wub = document.querySelector(`.wub`);
      wub.currentTime = 0.1;
      wub.play();
      break;
    case "p":
      const pimp = document.querySelector(`.pimp`);
      pimp.currentTime = 0.3;
      pimp.play();
      break;
    case "]":
      const biatch = document.querySelector(`.biatch`);
      biatch.currentTime = 0.2;
      biatch.volume = 0.7;
      biatch.play();
      break;
    case "g":
      const gunit = document.querySelector(`.gunit`);
      gunit.currentTime = 0.6;
      gunit.play();
      break;
    case "h":
      const gun = document.querySelector(`.gun`);
      gun.currentTime = 11;
      gun.play();
      break;
    case "j":
      const jail = document.querySelector(`.jail`);
      jail.currentTime = 0.1;
      jail.play();
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
    case "f":
      const fart = document.querySelector(`.fart`);
      fart.currentTime = 1.07;
      fart.play();
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
      laser.currentTime = 1.4;
      laser.volume = 0.7;
      laser.playbackRate = 1;
      laser.play();
      break;
    case "[":
      const airhorn = document.querySelector(`.airhorn`);
      airhorn.currentTime = 1.2;
      airhorn.volume = 0.5;
      airhorn.play();
      break;
    case "-":
      const witch = document.querySelector(`.witch`);
      witch.currentTime = 0.3;
      witch.volume = 0.5;
      witch.play();
      break;
    case ";":
      const crank = document.querySelector(`.crank`);
      crank.currentTime = 2.8;
      crank.volume = 0.5;
      crank.play();
      break;
    case "'":
      const echo = document.querySelector(`.echo`);
      echo.currentTime = 0.5;
      echo.volume = 0.5;
      echo.play();
      break;
    case "=":
      const laugh = document.querySelector(`.laugh`);
      laugh.currentTime = 0.2;
      laugh.volume = 0.5;
      laugh.play();
      break;
    case ",":
      const whistle = document.querySelector(`.whistle`);
      whistle.currentTime = 0.2;
      whistle.volume = 0.3;
      whistle.play();
      break;
    case " ":
      const airhorn2 = document.querySelector(`.airhorn2`);
      airhorn2.currentTime = 1.2;
      airhorn2.volume = 0.5;
      airhorn2.play();
      break;
    case "`":
      const mario = document.querySelector(`.mario`);
      mario.currentTime = 0.5;
      mario.volume = 0.5;
      mario.play();
      break;
    case "1":
      const yahoo = document.querySelector(`.yahoo`);
      yahoo.currentTime = 0.35;
      yahoo.volume = 0.4;
      yahoo.play();
      break;
    case "2":
      const jump = document.querySelector(`.jump`);
      jump.currentTime = 0.2;
      jump.volume = 0.2;
      jump.play();
      break;
    case "3":
      const coin = document.querySelector(`.coin`);
      coin.currentTime = 0.1;
      coin.volume = 0.7;
      coin.play();
      break;
    case "4":
      const mush = document.querySelector(`.mush`);
      mush.currentTime = 0.17;
      mush.volume = 0.1;
      mush.play();
      break;
    case "5":
      const dead = document.querySelector(`.dead`);
      dead.currentTime = 0.44;
      dead.volume = 0.3;
      dead.play();
      break;
    case "6":
      const mortal = document.querySelector(`.mortal`);
      mortal.currentTime = 0.2;
      mortal.volume = 0.3;
      mortal.play();
      break;
    case "7":
      const punch = document.querySelector(`.punch`);
      punch.currentTime = 0.9;
      punch.volume = 0.4;
      punch.play();
      break;
    case "8":
      const propane = document.querySelector(`.propane`);
      propane.currentTime = 0;
      propane.volume = 0.7;
      propane.play();
      break;
    case "9":
      const cocaine = document.querySelector(`.cocaine`);
      cocaine.currentTime = 1.1;
      cocaine.volume = 1;
      cocaine.play();
      break;
    case "0":
      const toot = document.querySelector(`.toot`);
      toot.currentTime = 0.4;
      toot.volume = 0.3;
      toot.play();
      break;
  }
}
