function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise esta sendo exeutada.");
    setTimeout(() => {
      console.log("Resolvendo a promise...");
      resolve("Resultado");
    }, 3 * 1000);
  });
}

const p = execute();

console.log(p);

setTimeout(() => {
  console.log(p);
}, 5 * 1000);
