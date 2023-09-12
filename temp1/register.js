function registerRequest(arg1, arg2) {
  if (arg1 === 'apple' && arg2 === 'banana') {
    return 'Fruit salad';
  } else if (arg1 === 'dog' && arg2 === 'cat') {
    return 'Pet lovers';
  } else {
    return 'No match found';
  }
}

const resultToRegister = registerRequest('apple', 'banana');
console.log(resultToRegister); // Output will be 'Fruit salad'