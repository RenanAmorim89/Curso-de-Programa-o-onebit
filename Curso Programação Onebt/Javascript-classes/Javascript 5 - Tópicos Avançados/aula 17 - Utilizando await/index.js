async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be of type number");
  }
  return a + b;
}

// Metodo mais antigo

// async function execute() {
//   asyncSum(50, 33).then((result) => {
//     console.log(result);
//   });
// }

// o await. Ele é uma palavra reservada do javascript que nos permite esperar pela execução
// de uma promise dentro de uma função async, ou seja, se nossa função async depende de uma
// outra promise, podemos esperar pela sua execução de forma “limpa” sem utilizar o .then().
// Para usar o await basta colocá-lo antes da chamada da função assíncrona:

//try catch para identifica erros
async function execute() {
  try {
    const result = await asyncSum(50, 33);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

//OBS: o await so funciona dentro de funçoes async. O await pode travar o codigo, pois ele esta dependendo o resultado da função, quanto for usar ele temos que ver tipode de função esta sendo executada.
execute();
