function imc(weigth, height) {
  return new Promise((resolve, reject) => {
    if (typeof weigth !== "number" || typeof height !== "number")
      reject("arguments must be of type number");
    else resolve(weigth / (height * height));
  });
}
function showImc(weigth, height) {
  imc(weigth, height)
    .then((result) => {
      console.log(`O reultado do IMC foi de ${result}`);

      if (result < 18.5) console.log("Situação: MAGREZA");
      else if (result < 25) console.log("Situação: NORMAL");
      else if (result < 30) console.log("Situação: SOBREPESO");
      else if (result < 40) console.log("Situação: OBESIDADE");
      else console.log("Situação: OBESIDADE GRAVE");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`Calculando o IMC para peso ${weigth} e altura ${height}...`);
}

showImc(78, 1.74);
showImc(48, 1.6);
showImc(71, "texto");
showImc(82, 1.72);
showImc(82, 1.72);
showImc(120, 1.8);
