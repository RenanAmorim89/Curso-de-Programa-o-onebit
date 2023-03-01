// function asyncSum(a, b) {
//   return new Promise((resolve, reject) => {
//     if (typeof a !== "number" || typeof b !== "number") {
//       reject("arguments must be of type number");
//     } else {
//       resolve(a + b);
//     }
//   });
// }

// function asyncSubtract(a, b) {
//   return new Promise((resolve, reject) => {
//     if (typeof a !== "number" || typeof b !== "number") {
//       reject("arguments must be type number");
//     } else {
//       resolve(a - b);
//     }
//   });
// }

// // Armazenado
// const sumResult = asyncSum(50, 33);
// const subtractResult = asyncSubtract(50, 33);

// // Vamos calcular as dua funçoes juntas, o codigo so vai avançar se as duas funçoes estiverem certas
// Promise.all([sumResult, subtractResult])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const numbers = [4, 9, 88, 13, 77];

function asyncSquare(x) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number") {
      reject(false);
    } else {
      resolve(x * x);
    }
  });
}

// ((number) => asyncSquare())) sintaxe abreviada da função de calback, ele ja retorna o valor.
//map((number) => asyncSquare(number))); Ele vai retornar um arrey de Promises
Promise.all(numbers.map((number) => asyncSquare(number)))
  .then((squares) => {
    console.log(squares);
  })
  .catch((err) => {
    console.log(err);
  });
