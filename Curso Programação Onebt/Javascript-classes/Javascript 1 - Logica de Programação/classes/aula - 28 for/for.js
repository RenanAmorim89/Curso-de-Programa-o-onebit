// startup; condition; finalization;

for (let indice = 0; indice <= 10; indice++) {
  alert("indice = " + indice);
}

let indice = 0;

for (
  alert("initializing the for");
  indice <= 10;
  alert("ending a repeating block")
) {
  alert("indice = " + indice);
  indice++;
}

let name = "Renan";

for (let indice = 0; indice < name.length; indice++) {
  console.log(name[indice]);
}
