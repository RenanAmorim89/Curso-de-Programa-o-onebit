const input1 = prompt("Enter the first number");
const input2 = prompt("Enter the second number");

const x = parseFloat(input1);
const y = parseFloat(input2);

const sum = x + y;
const subtraction = x - y;
const multiplication = x * y;
const division = x / y;

alert(
  "Result\n" +
    "\n Sum: " +
    sum +
    "\n Subtraction: " +
    subtraction +
    "\n Multiplication: " +
    multiplication +
    "\n Division: " +
    division
);
