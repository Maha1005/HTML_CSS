let expression = "";

function update(value) {
  document.querySelector(".result").textContent += value;
  expression += value;
}

function updateop(operator) {
  if (expression !== "" && !isNaN(expression[expression.length - 1])) {
    document.querySelector(".result").textContent += " " + operator + " ";
    expression += operator;
  }
}

function calculate() {
  try {
    let result = eval(expression);
    document.querySelector(".result").textContent = result;
    expression = result.toString();
  } catch (error) {
    document.querySelector(".result").textContent = "Error";
    expression = "";
  }
}

function cancel() {
  document.querySelector(".result").textContent = "";
  expression = "";
}
