const numbers = [];

function roundAndSum() {
  const input = document.getElementById("numberInput");
  const number = parseFloat(input.value);

  if (!isNaN(number)) {
    numbers.push(number);
    input.value = '';
    updateResult();
  }
}

function updateResult() {
  const roundedSum = roundAndSumNumbers(numbers);
  document.getElementById("demo").innerHTML = roundedSum;
}

function roundAndSumNumbers(arr) {
  const roundedNumbers = arr.map(num => Math.round(num));
  const sum = roundedNumbers.reduce((total, num) => total + num, 0);
  return sum;
}
