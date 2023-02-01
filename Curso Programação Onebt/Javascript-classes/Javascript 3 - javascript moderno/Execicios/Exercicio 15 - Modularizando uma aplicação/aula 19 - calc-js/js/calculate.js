export default function calculate() {
  const resultInput = document.querySelector("#result"); // adicionado
  resultInput.value = "ERRO";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}
// Muito cuidado ao usar o "eval" pois um usuario malicioso pode rodar um codigo nele.
