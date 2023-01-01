alert(
  "Hello... \n Aqui vocẽ pode fazer a comparação de poder de seus personagnes favoritos"
);

if (confirm("Click em OK para continuar\nClick em CANCELAR para sair.")) {
  alert("Nice Nice, let's Go");
} else if (confirm("Ok, quando precisar estaremos aqui!! bye")) {
  // alert("Ok, quando precisar estaremos aqui!! bye");
}

const atacante = prompt("Insira o  nome do personagen atacante");
const poderDeAtaque = parseFloat(prompt("Qual o poder de ataque?"));

const nameDODefensor = prompt("Insira o nome do personagen defensor");
let pontosDeVida = parseFloat(prompt("Insira os pontos de vida"));
const poderDeDefesa = parseFloat(prompt("Qual o poder de defesa"));
const escudo = prompt("Ele possue escudo (Sim/Não)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && escudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && escudo === "sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(
  atacante + " Causado " + danoCausado + " pontos de vida em " + nameDODefensor
);

alert(
  atacante +
    "\nPoder de Ataque: " +
    poderDeAtaque +
    "\n\n" +
    nameDODefensor +
    "\nPontos de Vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nEscudo: " +
    escudo
);
