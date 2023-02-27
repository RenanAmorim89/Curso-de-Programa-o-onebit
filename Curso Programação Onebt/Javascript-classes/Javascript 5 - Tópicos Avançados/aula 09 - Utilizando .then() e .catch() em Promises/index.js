function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise esta sendo execitada...");
    setTimeout(() => {
      if (false) {
        reject("a promise foi rejeitada");
      } else {
        console.log("Resolvendo a promose...");
        resolve(42);
      }
    }, 1000 * 2);
  });
}

// const p = execute();

// Metodo "then" ele serve para lidar com um promise reslvida. dentro no them nos passamos uma função de calbeck.
// Metodo "catch" ele serve para lidar com um promise não resolvida.

// p.then((result) => {
//   console.log(`A promise foi resolvida. O resultado foi: ${result}`);
// }).catch((err) => {
//   console.log(`A promise foi rejeitada. Motivo: ${err}`);
// });

//  A forma mais comum de se ultilizar a Promoise é encadiando ela

execute()
  .then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`);
  })
  .catch((err) => {
    console.log(`A promise foi rejeitada. Motivo: ${err}`);
  })
  .finally(() => {
    console.log("A promise foi finalizada");
  });
