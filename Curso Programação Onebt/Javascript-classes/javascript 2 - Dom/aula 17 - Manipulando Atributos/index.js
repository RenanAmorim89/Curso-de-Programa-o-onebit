const input = document.getElementById("input");

// document.getElementById("value").addEventListener("click", function () {
//   input.value = "Olá, mundo!";

//   console.log(input.getAttribute("value")); //mostra o valor pre-definido que esta no html
// });

document.getElementById("value").addEventListener("click", function () {
  input.value = input.value === "" ? "Olá, mundo!" : ""; //Verificação com if ternario - se ele estiver vazio sera "ola mundo" se estiver com alguma coisa sera transformado em vazio

  console.log(input.value); //Mostra o Valor
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "radio" ? "radio" : "text";
  //Outra Forma de Fazer, mas ele apenas transforma uma vez, ele não volta no seu estado natural
  // input.setAttribute("type", "radio");
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digite algo...";
});

document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.something;
  console.log("O valor do atributo data-samething é: " + data);
  input.dataset.something = "Algum outro valor";
  console.log(
    "o Valor doa dtributo data-something agora è: " + input.dataset.something
  );
});
