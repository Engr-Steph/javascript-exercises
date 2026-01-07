const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let total = 0;
  for (let i = 0; i < numbers.length; i++){
    total += numbers[i];
  }
  return total;
};

const multiply = function(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
    
  }
  return result;

};

const power = function(base, exponent) {
  return base ** exponent;
	
};

const factorial = function(numbers) {
  let result = 1;
  for (let i = 1; i <= numbers; i++) {
    result *=i;
    
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
