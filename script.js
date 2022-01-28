// class ClickAndHold {
//   /**
//    * @param {EventTarget} target The HTML element to apply the event to
//    * @param {Function} callback The function to run once the target is clicked and held
//    */
//   constructor(target, callback) {
//     this.target = target;
//     this.callback = callback;
//     this.isHeld = false;
//     this.activeHoldTimeoutId = null;

//     ["mousedown", "touchstart"].forEach((type) => {
//       this.target.addEventListener(type, this._onHoldStart.bind(this));
//     });

//     ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(
//       (type) => {
//         this.target.addEventListener(type, this._onHoldEnd.bind(this));
//       }
//     );
//   }
//   _onHoldStart() {
//     this.isHeld = true;

//     this.activeHoldTimeoutId = setTimeout(() => {
//       if (this.isHeld) {
//         this.callback();
//       }
//     }, 500);
//   }

//   _onHoldEnd() {
//     this.isHeld = false;
//     clearTimeout(this.activeHoldTimeoutId);
//   }

//   /**
//    * @param {EventTarget} target The HTML element to apply the event to
//    * @param {Function} callback The function to run once the target is clicked and held
//    */
//   static apply(target, callback) {
//     new ClickAndHold(target, callback);
//   }
// }

// Shortcut to retrieve elements
// let el = (element) => {
//   if (element.charAt(0) === "#") {
//     // if passed an ID...
//     return document.querySelector(element); // returns single statement
//   }

//   return document.querySelectorAll(element); // Otherwise, return a node list
// };

// Save audio context object to variable for every oscillator C4 - B4

// Audio Context Object
var audioContext = new AudioContext();

// Resume audio after disconnection
audioContext.resume();

// C4
var osc1 = audioContext.createOscillator();
osc1.frequency.value = 261.63;
osc1.type = "sine";
osc1.start();

var osc1_saw = audioContext.createOscillator();
osc1_saw.frequency.value = 440.0;
osc1_saw.type = "sawtooth";
osc1_saw.start();

// C#/Db
var osc2 = audioContext.createOscillator();
osc2.frequency.value = 277.18;
osc2.start();
var osc2_saw = audioContext.createOscillator();
osc2_saw.frequency.value = 440.0;
osc2_saw.type = "sawtooth";
osc2_saw.start();

// D
var osc3 = audioContext.createOscillator();
osc3.frequency.value = 293.66;
osc3.start();
var osc3_saw = audioContext.createOscillator();
osc3_saw.frequency.value = 440.0;
osc3_saw.type = "sawtooth";
osc3_saw.start();

// D#/Eb
var osc4 = audioContext.createOscillator();
osc4.frequency.value = 311.13;
osc4.start();
var osc4_saw = audioContext.createOscillator();
osc4_saw.frequency.value = 440.0;
osc4_saw.type = "sawtooth";
osc4_saw.start();

// E
var osc5 = audioContext.createOscillator();
osc5.frequency.value = 329.63;
osc5.start();
var osc5_saw = audioContext.createOscillator();
osc5_saw.frequency.value = 440.0;
osc5_saw.type = "sawtooth";
osc5_saw.start();

// F
var osc6 = audioContext.createOscillator();
osc6.frequency.value = 349.23;
osc6.start();
var osc6_saw = audioContext.createOscillator();
osc6_saw.frequency.value = 440.0;
osc6_saw.type = "sawtooth";
osc6_saw.start();

// F#/Gb
var osc7 = audioContext.createOscillator();
osc7.frequency.value = 369.99;
osc7.start();
var osc7_saw = audioContext.createOscillator();
osc7_saw.frequency.value = 440.0;
osc7_saw.type = "sawtooth";
osc7_saw.start();

// G4
var osc8 = audioContext.createOscillator();
osc8.frequency.value = 392.0;
osc8.start();
var osc8_saw = audioContext.createOscillator();
osc8_saw.frequency.value = 440.0;
osc8_saw.type = "sawtooth";
osc8_saw.start();

// G#/Ab
var osc9 = audioContext.createOscillator();
osc9.frequency.value = 415.3;
osc9.start();
var osc9_saw = audioContext.createOscillator();
osc9_saw.frequency.value = 440.0;
osc9_saw.type = "sawtooth";
osc9_saw.start();

// A
var osc10 = audioContext.createOscillator();
osc10.frequency.value = 440.0;
osc10.start();
var osc10_saw = audioContext.createOscillator();
osc10_saw.frequency.value = 440.0;
osc10_saw.type = "sawtooth";
osc10_saw.start();

// A#/Bb
var osc11 = audioContext.createOscillator();
osc11.frequency.value = 466.16;
osc11.start();
var osc11_saw = audioContext.createOscillator();
osc11_saw.frequency.value = 440.0;
osc11_saw.type = "sawtooth";
osc11_saw.start();

// B
var osc12 = audioContext.createOscillator();
osc12.frequency.value = 493.88;
osc12.start();
var osc12_saw = audioContext.createOscillator();
osc12_saw.frequency.value = 440.0;
osc12_saw.type = "sawtooth";
osc12_saw.start();

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

C4.addEventListener("mousedown", function () {
  osc1.connect(audioContext.destination);
  osc1_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
C4.addEventListener("mouseup", function () {
  osc1.disconnect(audioContext.destination);
  osc1_saw.disconnect(audioContext.destination);
});

cSharp4.addEventListener("mousedown", function () {
  osc2.connect(audioContext.destination);
  osc2_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
cSharp4.addEventListener("mouseup", function () {
  osc2.disconnect(audioContext.destination);
  osc2_saw.disconnect(audioContext.destination);
});

D4.addEventListener("mousedown", function () {
  osc3.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
  osc3_saw.connect(audioContext.destination);
});
D4.addEventListener("mouseup", function () {
  osc3.disconnect(audioContext.destination);
  osc3_saw.disconnect(audioContext.destination);
});

dSharp4.addEventListener("mousedown", function () {
  osc4.connect(audioContext.destination);
  osc4_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
dSharp4.addEventListener("mouseup", function () {
  osc4.disconnect(audioContext.destination);
  osc4_saw.disconnect(audioContext.destination);
});

E4.addEventListener("mousedown", function () {
  osc5.connect(audioContext.destination);
  osc5_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
E4.addEventListener("mouseup", function () {
  osc5.disconnect(audioContext.destination);
  osc5_saw.disconnect(audioContext.destination);
});

F4.addEventListener("mousedown", function () {
  osc6.connect(audioContext.destination);
  osc6_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
F4.addEventListener("mouseup", function () {
  osc6.disconnect(audioContext.destination);
  osc6_saw.disconnect(audioContext.destination);
});

fSharp4.addEventListener("mousedown", function () {
  osc7.connect(audioContext.destination);
  osc7_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
fSharp4.addEventListener("mouseup", function () {
  osc7.disconnect(audioContext.destination);
  osc7_saw.disconnect(audioContext.destination);
});

G4.addEventListener("mousedown", function () {
  osc8.connect(audioContext.destination);
  osc8_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
G4.addEventListener("mouseup", function () {
  osc8.disconnect(audioContext.destination);
  osc8_saw.disconnect(audioContext.destination);
});

gSharp4.addEventListener("mousedown", function () {
  osc9.connect(audioContext.destination);
  osc9_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
gSharp4.addEventListener("mouseup", function () {
  osc9.disconnect(audioContext.destination);
  osc9_saw.disconnect(audioContext.destination);
});

A4.addEventListener("mousedown", function () {
  osc10.connect(audioContext.destination);
  osc10_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
A4.addEventListener("mouseup", function () {
  osc10.disconnect(audioContext.destination);
  osc10_saw.disconnect(audioContext.destination);
});

aSharp4.addEventListener("mousedown", function () {
  osc11.connect(audioContext.destination);
  osc11_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
aSharp4.addEventListener("mouseup", function () {
  osc11.disconnect(audioContext.destination);
  osc11_saw.disconnect(audioContext.destination);
});

B4.addEventListener("mousedown", function () {
  osc12.connect(audioContext.destination);
  osc12_saw.connect(audioContext.destination);
  // setTimeout(function () {}, 500);
});
B4.addEventListener("mouseup", function () {
  osc12.disconnect(audioContext.destination);
  osc12_saw.disconnect(audioContext.destination);
});

// Key Down/Up Events

//C4
let zDown = addEventListener("keydown", checkKeyPressDown_z, false);
let zUp = addEventListener("keyup", checkKeyPressUp_z, false);

function checkKeyPressDown_z(key) {
  if (key.keyCode == "90") {
    osc1.connect(audioContext.destination);
    osc1_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_z(key) {
  if (key.keyCode == "90") {
    osc1.disconnect(audioContext.destination);
    osc1_saw.disconnect(audioContext.destination);
  }
}

// C#/Db4
let sDown = addEventListener("keydown", checkKeyPressDown_s, false);
let sUp = addEventListener("keyup", checkKeyPressUp_s, false);

function checkKeyPressDown_s(key) {
  if (key.keyCode == "83") {
    osc2.connect(audioContext.destination);
    osc2_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_s(key) {
  if (key.keyCode == "83") {
    osc2.disconnect(audioContext.destination);
    osc2_saw.disconnect(audioContext.destination);
  }
}

// D4
let xDown = addEventListener("keydown", checkKeyPressDown_x, false);
let xUp = addEventListener("keyup", checkKeyPressUp_x, false);

function checkKeyPressDown_x(key) {
  if (key.keyCode == "88") {
    osc3.connect(audioContext.destination);
    osc3_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_x(key) {
  if (key.keyCode == "88") {
    osc3.disconnect(audioContext.destination);
    osc3_saw.disconnect(audioContext.destination);
  }
}

// D#/Eb4
let dDown = addEventListener("keydown", checkKeyPressDown_d, false);
let dUp = addEventListener("keyup", checkKeyPressUp_d, false);

function checkKeyPressDown_d(key) {
  if (key.keyCode == "68") {
    osc4.connect(audioContext.destination);
    osc4_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_d(key) {
  if (key.keyCode == "68") {
    osc4.disconnect(audioContext.destination);
    osc4_saw.disconnect(audioContext.destination);
  }
}

// E4
let cDown = addEventListener("keydown", checkKeyPressDown_c, false);
let cUp = addEventListener("keyup", checkKeyPressUp_c, false);

function checkKeyPressDown_c(key) {
  if (key.keyCode == "67") {
    osc5.connect(audioContext.destination);
    osc5_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_c(key) {
  if (key.keyCode == "67") {
    osc5.disconnect(audioContext.destination);
    osc5_saw.disconnect(audioContext.destination);
  }
}

// F4
let vDown = addEventListener("keydown", checkKeyPressDown_v, false);
let vUp = addEventListener("keyup", checkKeyPressUp_v, false);

function checkKeyPressDown_v(key) {
  if (key.keyCode == "86") {
    osc6.connect(audioContext.destination);
    osc6_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_v(key) {
  if (key.keyCode == "86") {
    osc6.disconnect(audioContext.destination);
    osc6_saw.disconnect(audioContext.destination);
  }
}

// F#/Gb4
let gDown = addEventListener("keydown", checkKeyPressDown_g, false);
let gUp = addEventListener("keyup", checkKeyPressUp_g, false);

function checkKeyPressDown_g(key) {
  if (key.keyCode == "71") {
    osc7.connect(audioContext.destination);
    osc7_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_g(key) {
  if (key.keyCode == "71") {
    osc7.disconnect(audioContext.destination);
    osc7_saw.disconnect(audioContext.destination);
  }
}

// G4
let bDown = addEventListener("keydown", checkKeyPressDown_b, false);
let bUp = addEventListener("keyup", checkKeyPressUp_b, false);

function checkKeyPressDown_b(key) {
  if (key.keyCode == "66") {
    osc8.connect(audioContext.destination);
    osc8_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_b(key) {
  if (key.keyCode == "66") {
    osc8.disconnect(audioContext.destination);
    osc8_saw.disconnect(audioContext.destination);
  }
}

// G#/Ab4
let hDown = addEventListener("keydown", checkKeyPressDown_h, false);
let hUp = addEventListener("keyup", checkKeyPressUp_h, false);

function checkKeyPressDown_h(key) {
  if (key.keyCode == "72") {
    osc9.connect(audioContext.destination);
    osc9_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_h(key) {
  if (key.keyCode == "72") {
    osc9.disconnect(audioContext.destination);
    osc9_saw.disconnect(audioContext.destination);
  }
}

// A4
let nDown = addEventListener("keydown", checkKeyPressDown_n, false);
let nUp = addEventListener("keyup", checkKeyPressUp_n, false);

function checkKeyPressDown_n(key) {
  if (key.keyCode == "78") {
    osc10.connect(audioContext.destination);
    osc10_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_n(key) {
  if (key.keyCode == "78") {
    osc10.disconnect(audioContext.destination);
    osc10_saw.disconnect(audioContext.destination);
  }
}

// A#Bb4
let jDown = addEventListener("keydown", checkKeyPressDown_j, false);
let jUp = addEventListener("keyup", checkKeyPressUp_j, false);

function checkKeyPressDown_j(key) {
  if (key.keyCode == "74") {
    osc11.connect(audioContext.destination);
    osc11_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_j(key) {
  if (key.keyCode == "74") {
    osc11.disconnect(audioContext.destination);
    osc11_saw.disconnect(audioContext.destination);
  }
}

// B4
let mDown = addEventListener("keydown", checkKeyPressDown_m, false);
let mUp = addEventListener("keyup", checkKeyPressUp_m, false);

function checkKeyPressDown_m(key) {
  if (key.keyCode == "77") {
    osc12.connect(audioContext.destination);
    osc12_saw.connect(audioContext.destination);
  }
}

function checkKeyPressUp_m(key) {
  if (key.keyCode == "77") {
    osc12.disconnect(audioContext.destination);
    osc12_saw.disconnect(audioContext.destination);
  }
}

// Resume audio after disconnection
audioContext.resume();
