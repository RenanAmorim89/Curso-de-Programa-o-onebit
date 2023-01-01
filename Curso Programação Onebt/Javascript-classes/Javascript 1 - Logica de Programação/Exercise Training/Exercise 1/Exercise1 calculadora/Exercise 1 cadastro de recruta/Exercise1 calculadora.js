alert(
  "Ola seja muito bem vindo a nossa calculadora!" +
    "\nAqui nós temos as 4 operações basicas." +
    "\n Sinta-se a vontade para usa-las." +
    "\n\n Click em OK para continuar."
);

const imput1 = parseFloat(prompt("Insira o Primeiro numero."));
const imput2 = parseFloat(prompt("Insira o Segundo valor."));

const x = imput1;
const y = imput2;

const somar = x + y;
const subritrair = x - y;
const dividir = x / y;
const multiplicar = x * y;

alert(
  "Aqui estão o Resultado das operações!\n\n" +
    "\n Soma: " +
    somar +
    "\n Subtração: " +
    subritrair +
    "\n Divisão: " +
    dividir +
    "\n Multiplicação: " +
    multiplicar
);
