const p = new Promise((resolve, reject) => {
  console.log("A promise esta sendo execitada");
  setTimeout(() => {
    if (1 + 1 === 2) {
      reject("Algo deu errado!");
    }
    console.log("resolvendo a promise...");
  }, 1000 * 3);
});

console.log(p);

setTimeout(() => {
  console.log(p);
}, 5 * 1000);
