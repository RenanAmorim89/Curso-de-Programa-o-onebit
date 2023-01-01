const nomeCarro1 = prompt("Insira o nome do carro 1");
const velocidadeCarro1 = parseFloat(prompt("Insira a velocidade do carro 1"));

const nomeCarro2 = prompt("Insira o nome do carrro 2");
const velocidadeCarro2 = parseFloat(prompt("Insira a velocidade do carro 2"));

if (velocidadeCarro1 > velocidadeCarro2) {
  alert(nomeCarro1 + " é mais rápido que " + nomeCarro2);
} else if (velocidadeCarro2 > velocidadeCarro1) {
  alert(nomeCarro2 + "é mais rapido que " + nomeCarro1);
} else {
  alert(nomeCarro1 + " Isso é " + nomeCarro2 + " têm velocidades iguais ");
}
