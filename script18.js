const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

document.getElementById("demo").innerHTML = numbers;

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}