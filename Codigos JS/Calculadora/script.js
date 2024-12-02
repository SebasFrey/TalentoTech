const display = document.getElementById('display');
let currentValue = 0;
let currentOperation = null;
let waitingForSecondOperand = false;

function appendToDisplay(value) {
  if (waitingForSecondOperand) {
    display.value = value;
    waitingForSecondOperand = false;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
  currentValue = 0;
  currentOperation = null;
  waitingForSecondOperand = false;
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function setOperation(operation) {
  if (currentOperation !== null) {
    calculate();
  }
  currentValue = parseFloat(display.value);
  currentOperation = operation;
  waitingForSecondOperand = true;
}

function calculate() {
  if (currentOperation === null || waitingForSecondOperand) {
    return;
  }

  let secondOperand = parseFloat(display.value);
  let result = 0;

  while (true) {
    switch(currentOperation) {
      case '+':
        result = currentValue + secondOperand;
        break;
      case '-':
        result = currentValue - secondOperand;
        break;
      case '*':
        result = currentValue * secondOperand;
        break;
      case '/':
        if (secondOperand !== 0) {
          result = currentValue / secondOperand;
        } else {
          display.value = 'Error: División por cero';
          return;
        }
        break;
      default:
        display.value = 'Error: Operación no válida';
        return;
    }

    display.value = result;
    currentValue = result;
    currentOperation = null;
    waitingForSecondOperand = true;
    break;
  }
}

