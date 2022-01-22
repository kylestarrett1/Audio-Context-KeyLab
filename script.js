// Shortcut to retrieve elements
let el = (element) => {
  if (element.charAt(0) === "#") {
    // if passed an ID...
    return document.querySelector(element); // returns single statement
  }

  return document.querySelectorAll(element); // Otherwise, return a node list
};

// Save audio context object to variable for every oscillator C4 - B4

// Audio Context Object
var audioContext = new AudioContext();

// C4
var osc1 = audioContext.createOscillator();
osc1.frequency.value = 261.63;
osc1.start();

// C#/Db
var osc2 = audioContext.createOscillator();
osc2.frequency.value = 277.18;
osc2.start();

// D
var osc3 = audioContext.createOscillator();
osc3.frequency.value = 293.66;
osc3.start();

// D#/Eb
var osc4 = audioContext.createOscillator();
osc4.frequency.value = 311.13;
osc4.start();

// E
var osc5 = audioContext.createOscillator();
osc5.frequency.value = 329.63;
osc5.start();

// F
var osc6 = audioContext.createOscillator();
osc6.frequency.value = 349.23;
osc6.start();

// F#/Gb
var osc7 = audioContext.createOscillator();
osc7.frequency.value = 369.99;
osc7.start();

// G4
var osc8 = audioContext.createOscillator();
osc8.frequency.value = 392.0;
osc8.start();

// G#/Ab
var osc9 = audioContext.createOscillator();
osc9.frequency.value = 415.3;
osc9.start();

// A
var osc10 = audioContext.createOscillator();
osc10.frequency.value = 440.0;
osc10.start();

// A#/Bb
var osc11 = audioContext.createOscillator();
osc11.frequency.value = 466.16;
osc11.start();

// B
var osc12 = audioContext.createOscillator();
osc12.frequency.value = 493.88;
osc12.start();

// Variables

var C4 = document.querySelector("[data-key='C']"),
  cSharp4 = document.querySelector("[data-key='C#/Db']"),
  D4 = document.querySelector("[data-key='D']"),
  dSharp4 = document.querySelector("[data-key='D#/Eb']"),
  E4 = document.querySelector("[data-key='E']"),
  F4 = document.querySelector("[data-key='F']"),
  fSharp4 = document.querySelector("[data-key='F#/Gb']"),
  G4 = document.querySelector("[data-key='G']"),
  gSharp4 = document.querySelector("[data-key='G#/Ab']"),
  A4 = document.querySelector("[data-key='A']"),
  aSharp4 = document.querySelector("[data-key='A#/Bb']"),
  B4 = document.querySelector("[data-key='B']");

/* Click Events */

C4.addEventListener("click", function () {
  osc1.connect(audioContext.destination);
});
C4.addEventListener("dblclick", function () {
  osc1.disconnect(audioContext.destination);
});

cSharp4.addEventListener("click", function () {
  osc2.connect(audioContext.destination);
});
cSharp4.addEventListener("dblclick", function () {
  osc2.disconnect(audioContext.destination);
});

D4.addEventListener("click", function () {
  osc3.connect(audioContext.destination);
});
D4.addEventListener("dblclick", function () {
  osc3.disconnect(audioContext.destination);
});

dSharp4.addEventListener("click", function () {
  osc4.connect(audioContext.destination);
});
dSharp4.addEventListener("dblclick", function () {
  osc4.disconnect(audioContext.destination);
});

E4.addEventListener("click", function () {
  osc5.connect(audioContext.destination);
});
E4.addEventListener("dblclick", function () {
  osc5.disconnect(audioContext.destination);
});

F4.addEventListener("click", function () {
  osc6.connect(audioContext.destination);
});
F4.addEventListener("dblclick", function () {
  osc6.disconnect(audioContext.destination);
});

fSharp4.addEventListener("click", function () {
  osc7.connect(audioContext.destination);
});
fSharp4.addEventListener("dblclick", function () {
  osc7.disconnect(audioContext.destination);
});

G4.addEventListener("click", function () {
  osc8.connect(audioContext.destination);
});
G4.addEventListener("dblclick", function () {
  osc8.disconnect(audioContext.destination);
});

gSharp4.addEventListener("click", function () {
  osc9.connect(audioContext.destination);
});
gSharp4.addEventListener("dblclick", function () {
  osc9.disconnect(audioContext.destination);
});

A4.addEventListener("click", function () {
  osc10.connect(audioContext.destination);
});
A4.addEventListener("dblclick", function () {
  osc10.disconnect(audioContext.destination);
});

aSharp4.addEventListener("click", function () {
  osc11.connect(audioContext.destination);
});
aSharp4.addEventListener("dblclick", function () {
  osc11.disconnect(audioContext.destination);
});

B4.addEventListener("click", function () {
  osc12.connect(audioContext.destination);
});
B4.addEventListener("dblclick", function () {
  osc12.disconnect(audioContext.destination);
});
