// Lab-3 Solution

// Adds two numbers
const add = (a, b) => {
    return a + b;
  };
  
  // Subtracts the second number from the first
  const subtract = (a, b) => {
    return b - a;
  };
  
  // Multiplies two numbers
  const multiply = (a, b) => {
    return a * b;
  };
  
  // Divides the first number by the second
  const divide = (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  };
  
  // Returns the remainder of dividing the first number by the second
  const modulas = (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a % b;
  };
  
  // Raises the first number to the power of the second
  const power = (base, exponent) => {
    return Math.pow(base, exponent);
  };
  
  // Returns the square of a number
  const square = (num) => {
    num * num
  };
  
  // Returns the largest integer less than or equal to the number
  const floor = (num) => {
    return Math.floor(num);
  };
  
  // Returns the smallest integer greater than or equal to the number
  const ceiling = (num) => {
    throw new Error("Noit implemented yet");
  };
  
  // Export all functions
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    square,
    floor,
    ceiling,
  };
  