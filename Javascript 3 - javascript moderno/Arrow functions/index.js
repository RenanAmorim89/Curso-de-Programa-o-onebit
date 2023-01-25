//Modo antigo de escrever!
function normalSum(a, b) {
  return a + b;
}

console.log(`Soma Normal: ${normalSum(2, 2)}`);

const anonymusSum = function (a, b) {
  return a + b;
};

console.log(`Soma Anônima: ${anonymusSum(2, 2)}`);

//Arrow functions
const arrowSum = (a, b) => {
  return a + b;
};

console.log(`Soma arrow Function: ${arrowSum(2, 2)}`);

const subtract = (a, b) => a - b;
console.log(`Subtração: ${subtract(5, 2)}`);

// Quando temos apenas um parametro não precisams colocar ()
const double = (n) => `O dobro de ${n} é ${n * 2}`;

const number = 21;
console.log(double(number));

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town[0] === "P");

console.log(startingWithP);
