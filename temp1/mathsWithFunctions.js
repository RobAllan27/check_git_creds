function addNumbers(number1, number2) {
  return number1 + number2;
}

function deductNumbers(number1, number2) {
  return number1 - number2;
}

function diffBetweenNumbers(number1, number2) {
  const difference = Math.abs(number1 - number2);
  return difference;
}

// Example usage:
const result1 = addNumbers(2, 1);
console.log("Hello" + result1); // Output will be 3

const result2 = deductNumbers(5, 2);
console.log(result2); // Output will be 3

result3 = diffBetweenNumbers(5, 2);
console.log(result3); // Output will be 3

result3 = diffBetweenNumbers(4, 7);
console.log(result3); // Output will be 3
