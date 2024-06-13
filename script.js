const resultDisplay = document.getElementById("result");

// Number NodeList
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

// Operator NodeList
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

// Other Buttons NodeList
const submit = document.getElementById("submit");
const allClear = document.getElementById("clear");

let lastInputIsOperator = false;

// Number Event
zero.addEventListener("click", (e) => {
  resultDisplay.value += 0;
  lastInputIsOperator = false;
});
one.addEventListener("click", (e) => {
  resultDisplay.value += 1;
  lastInputIsOperator = false;
});
two.addEventListener("click", (e) => {
  resultDisplay.value += 2;
  lastInputIsOperator = false;
});
three.addEventListener("click", (e) => {
  resultDisplay.value += 3;
  lastInputIsOperator = false;
});
four.addEventListener("click", (e) => {
  resultDisplay.value += 4;
  lastInputIsOperator = false;
});
five.addEventListener("click", (e) => {
  resultDisplay.value += 5;
  lastInputIsOperator = false;
});
six.addEventListener("click", (e) => {
  resultDisplay.value += 6;
  lastInputIsOperator = false;
});
seven.addEventListener("click", (e) => {
  resultDisplay.value += 7;
  lastInputIsOperator = false;
});
eight.addEventListener("click", (e) => {
  resultDisplay.value += 8;
  lastInputIsOperator = false;
});
nine.addEventListener("click", (e) => {
  resultDisplay.value += 9;
  lastInputIsOperator = false;
});

// Operator Event
plus.addEventListener("click", (e) => {
  if (!lastInputIsOperator) {
    resultDisplay.value += "+";
    lastInputIsOperator = true;
  }
});
minus.addEventListener("click", (e) => {
  if (!lastInputIsOperator) {
    resultDisplay.value += "-";
    lastInputIsOperator = true;
  }
});
multiply.addEventListener("click", (e) => {
  if (!lastInputIsOperator) {
    resultDisplay.value += "*";
    lastInputIsOperator = true;
  }
});
divide.addEventListener("click", (e) => {
  if (!lastInputIsOperator) {
    resultDisplay.value += "/";
    lastInputIsOperator = true;
  }
});

// Submit Event
submit.addEventListener("click", (e) => {
  e.preventDefault();
  resultTotal = eval(resultDisplay.value);
  resultDisplay.value = resultTotal;
  lastInputIsOperator = false; 
});

// AC Event
allClear.addEventListener("click", (e) => {
  resultDisplay.value = "";
  lastInputIsOperator = false;
});
