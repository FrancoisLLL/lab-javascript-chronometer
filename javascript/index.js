const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let intervalId = null;

function printTime() {
  // ... your code goes here
  intervalId = setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 5)
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  if (minutes < 10) {
    minDecElement.innerText = "0"
    minUniElement.innerText = minutes;
  } else {
    minDecElement.innerText = Math.floor(minutes / 10);
    minUniElement.innerText = minutes % 10;
  }
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  if (seconds < 10) {
    secDecElement.innerText = "0"
    secUniElement.innerText = seconds;
  } else {
    secDecElement.innerText = Math.floor(seconds / 10);
    secUniElement.innerText = seconds % 10;
  }
}

// ==> BONUS
function printMilliseconds() {
  
  let milliSeconds = chronometer.getMilliSeconds();
  if (milliSeconds < 10) {
    milDecElement.innerText = "0"
    milUniElement.innerText = milliSeconds;
  } else {
    milDecElement.innerText = Math.floor(milliSeconds / 10);
    milUniElement.innerText = milliSeconds % 10;
  }}

function printSplit() {
  let split = document.createElement("li");
  split.innerText = chronometer.split();
  splitsElement.appendChild(split);
}

function clearSplits() {
  splitsElement.innerText = "";
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.add("stop");
  btnLeftElement.classList.remove("start");

  btnLeftElement.innerText = "STOP";
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.add("split");
  btnRightElement.classList.remove("reset");

  btnRightElement.innerText = "SPLIT";

}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.add("start");
  btnLeftElement.classList.remove("stop");
  btnLeftElement.innerText = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.add("reset");
  btnRightElement.classList.remove("split");
  btnRightElement.innerText = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnLeftElement.classList.contains("stop")) {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
    clearInterval(intervalId);
  } else if (btnLeftElement.classList.contains("start")) {
    chronometer.start();
    setSplitBtn();
    setStopBtn();
    printTime();
  }

});


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("split")) {
    printSplit();
  }

  if (btnRightElement.classList.contains("reset")) {
    clearSplits();
    chronometer.reset();
    minDecElement.innerText = "0";
    minUniElement.innerText = "0";
    secDecElement.innerText = "0";
    secUniElement.innerText = "0";
  }

});


