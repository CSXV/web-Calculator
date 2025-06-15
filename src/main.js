// import '@material/web/button/filled-button.js';
// import '@material/web/button/outlined-button.js';
// import '@material/web/checkbox/checkbox.js';

import './style.css'

// --------------------------------------------------------------------------------
// elemnets variables
// --------------------------------------------------------------------------------
let input = document.getElementById("input");
let results = document.getElementById("results");

let calc = document.getElementById("calc");
let clear = document.getElementById("clear");

// let numbersContainer = document.getElementById("numbers-container");
// let buttonsContainer = document.getElementById("buttons-container");

// --------------------------------------------------------------------------------
// vars
// --------------------------------------------------------------------------------
let history = [];

// --------------------------------------------------------------------------------
// reset
// --------------------------------------------------------------------------------
input.focus();

// --------------------------------------------------------------------------------
// helper fuctions
// --------------------------------------------------------------------------------
function isValidExpression(input) {
  const regex = /^[0-9+\-*/().\s]+$/;
  return regex.test(input);
}

function buttonClick(event) {
  let button = event.target.closest("button");

  if (!button) return;
  // if (button.innerText == "=" || button.innerText == "C") return;
  if (!isValidExpression(button.innerText)) return;

  input.value += button.innerText;
}

function calculate() {
  if (input.value == '') return;

  let result = eval(input.value);
  results.value = result;

  history.push(result);
}

function clearing() {
  input.value = "";
  results.value = "";
};

// --------------------------------------------------------------------------------
// events
// --------------------------------------------------------------------------------
calc.onclick = function() {
  // let result = eval(history.join(''));
  // results.value = result;

  calculate();
};

input.addEventListener("input", function() {
  if (!isValidExpression(this.value)) {
    this.value = this.value.slice(0, -1); // Remove last invalid character
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "Enter") {
    calculate();
  }

  if (event.code == "KeyC") {
    clearing();
  }
});

clear.onclick = () => clearing();

backspace.onclick = () => (input.value = input.value.slice(0, -1));

container.onclick = buttonClick;

// --------------------------------------------------------------------------------
//
// --------------------------------------------------------------------------------
