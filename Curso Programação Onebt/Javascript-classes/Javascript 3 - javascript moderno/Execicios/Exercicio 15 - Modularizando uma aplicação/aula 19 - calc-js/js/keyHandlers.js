import calculate from "./calculate.js";

const input = document.querySelector("#input"); // este input sera usado para outras funções

export function handleButtanPress(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
  // adicionado "ev", trocamos o "charKeyBtn" por "ev.currentTarget" ele sempre sera o botão, quando o botão for clicado que o evento sera disparado
}

export function handClearbutton() {
  input.value = "";
  input.focus();
}

export function handleTyping(ev) {
  ev.preventDefault();

  // Um arrey com os caracteres que são permitidos, o usuario não vai conseguir
  // digitar outro fora esses.
  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ]; // trouxemos tbm o arrey
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }

  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate(); // dica: se selecionarmos o "calculate sem ()" e apertar o "Ctrl e espaço" ele automaticamente nos trara o caminho para importação. Obs:precisamos importar o "caculate"
  }
}
