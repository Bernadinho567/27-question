const numbers = [];

function subtractNumber() {
  const input = document.getElementById("numberInput");
  const number = parseInt(input.value);

  if (!isNaN(number)) {
    numbers.push(number);
    input.value = '';
    updateResult();
  }
}

function updateResult() {
  const result = subtractNumbers(numbers);
  document.getElementById("demo").innerHTML = result;
}

function subtractNumbers(arr) {
  return arr.reduce(myFunc);
}

function myFunc(total, num) {
  return total - num;
}
