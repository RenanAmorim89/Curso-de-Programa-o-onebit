const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]); //console.log(P, r, o, n)

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Juno");

console.log({ towns, townsCopy });

//Usar ele para clonar objetos iteraveis
const townsClone = [...towns]; //criei um novo arrey

townsClone.push("Aldebaran");

console.log({ towns, townsCopy, townsClone });

//objetos normais
const townsObj = { ...towns };
const townsObjClone = { ...townsObj };

townsObjClone.test = "Test";

console.log({ townsObj, townsObjClone });
