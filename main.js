let num1 = "";
let num2 = "";
let operator = "";
let result = null;
let isOperatorSelected = false;

const numbers = document.querySelectorAll(".num");
const addition = document.getElementById("addition");
const sub = document.getElementById("sub");
const clear = document.getElementById("clear");
const clearOne = document.getElementById("clear-one");
const equal = document.getElementById("equal");
const display = document.getElementById("display");

numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    if (!isOperatorSelected) {
      //   num1 += event.target.innerText;
      num1 = num1 + event.target.innerText;
      display.innerText = `${num1} ${operator} ${num2}`;
    } else {
      num2 = num2 + event.target.innerText;
      display.innerText = `${num1} ${operator} ${num2}`;
    }
  });
});

addition.addEventListener("click", function (event) {
  isOperatorSelected = true;
  operator = event.target.innerText;
  display.innerText = `${num1} ${operator} ${num2}`;
});
sub.addEventListener("click", function (event) {
    isOperatorSelected = true;
    operator = event.target.innerText;
    display.innerText = `${num1} ${operator} ${num2}`;
  });
  mul.addEventListener("click", function (event) {
    isOperatorSelected = true;
    operator = event.target.innerText;
    display.innerText = `${num1} ${operator} ${num2}`;
  });
  div.addEventListener("click", function (event) {
    isOperatorSelected = true;
    operator = event.target.innerText;
    display.innerText = `${num1} ${operator} ${num2}`;
  });

function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  isOperatorSelected = false;
  display.innerText = "";
}

clear.addEventListener("click", clearDisplay);


    equal.addEventListener("click", function () {
        if (operator === "+") {
          result = parseInt(num1) + parseInt(num2);
        } else if (operator === "-") {
          result = parseInt(num1) - parseInt(num2);
        } else if (operator === "*") {
            result = parseInt(num1) * parseInt(num2);
          } else if (operator === "/") {
            result = parseInt(num1) / parseInt(num2);
          }

        display.innerText = result;});
        

  clearOne.addEventListener("click", function () {
    if (num2.length > 0) {
      num2 = num2.slice(0, -1);
    } else if (operator) {
      operator = "";
      isOperatorSelected = false;
    } else if (num1.length > 0) {
      num1 = num1.slice(0, -1);
    }
    
    display.innerText = `${num1} ${operator} ${num2}`;
  });
  
    
 