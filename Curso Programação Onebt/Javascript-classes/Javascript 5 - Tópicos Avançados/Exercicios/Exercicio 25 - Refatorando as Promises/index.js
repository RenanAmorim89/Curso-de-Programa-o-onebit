async function imc(weigth, height) {
  if (typeof weigth !== "number" || typeof height !== "number") {
    return Promise.reject("arguments must be of type number");
  }
  return weigth / (height * height);
}

async function showImc(weigth, height) {
  try {
    console.log(`Calculando o IMC para o peso ${weigth} e altura ${height}...`);

    const result = await imc(weigth, height);

    console.log(`O resultado do IMC foi de ${result}`);

    if (result < 18.5) console.log("Situação: MAGREZA");
    else if (result < 25) console.log("Situação; NORMAL");
    else if (result < 30) console.log("Situação: SOBREPESO");
    else if (result < 40) console.log("Situação: OBESIDADE");
    else console.log("Situação: OBESIDADE GRAVE");
  } catch (error) {
    console.log(error);
  }
}

showImc(78, 1.74);
showImc(48, 1.6);
showImc(71, "texto");
showImc(82, 1.72);
showImc(82, 1.72);
showImc(120, 1.8);
