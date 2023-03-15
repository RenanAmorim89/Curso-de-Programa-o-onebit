// Com o "process" nos pegamos saidas e entradas do usuario atraves do "stdout"

// 1-podemos importar a "process" sem importar ela, essa biblioteca pega todos os parametros que são passados
// para aquele script assim que ele roda.
// 2- "argv" ele pega os argumentos que foram passados para aquele script
// 3- O "process" tem um metodo para exibir datos no console "process.stdout.write"
// 04- Agora vamos pedir que o usuario entre com informações.
// "process.studim(entrada).on('data', (keyboard))" tudo o que o usuario digitar vai cair nessa variavel.
// 5- Vamos passar uma função para o metodo "on"
// 6- temos que colocar o "process.exit()" se não ele fica chamando a função

const process = require("process");

// console.log(process.argv);

// process.stdout.write("Qual o seu nome?");

console.log("Digite seu nome:");
process.stdin.on("data", (keyboard) => {
  process.stdout.write(`Texto do usuario: ${keyboard}`);
  process.exit();
});
