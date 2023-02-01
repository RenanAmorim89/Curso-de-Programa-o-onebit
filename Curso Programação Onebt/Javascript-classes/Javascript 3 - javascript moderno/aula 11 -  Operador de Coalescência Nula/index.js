const a = 0;

const b = null;

const c = "Teste";
// Expessão de cutor circuito.
// o js vai tentar ler "a" mas como o valor é "0" ele vai considerar como false e assim se repete com "b" ao contrario da string que tem um conteudo, então o js so restornara o valor da string
console.log(a || b || c);

//Operador de Coalescência Nula.
// Coisas como null e undefined ele vai ignorar.
// Caso o "a" for null ou undefined ele passara para o proximo.
console.log(a ?? b ?? c);

// (Seguno Ex:)
let e = 0;

let f = a || 42; // se não tiver algum conteudo ele sera 42

console.log({ e, f });

//Se "f" tiver algum conteudo ele sera "f" mas se ele não ter ele sera "42"
e = f ?? 42;
