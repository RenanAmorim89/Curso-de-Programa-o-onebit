const average = (...numbers) => {
  // vamos somar todos o numeros que estão no arrey
  //"reduce" uma de suas funçoes é fazer a soma de todos os elementos do arrey
  //vamos passar 2 parametros, 1 acumulador e o numero atual
  //nos podemos retornar o acumulador e o numero
  // o "accum" começa em 0
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  //vamos dividir a soma ("sum") pela quantidade de valores que foi passada (numbers)
  return sum / numbers.length;
};

console.log(`Media Aritmética Simples: ${average(3, 6, 10, 9)} `);

const weightedAverage = (...entries) => {
  //reduce vai fazer a soma que multiplica pelo peso
  //vamos desestruturar o objeto e pegar elementos especificos dele "namber e weight"
  // primeiro parametro é o acumulador e o segundo é o objetos desestruturado
  // ele vai retornar o accum + (numero * seu peso)
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );
  // caso weight seja nulo ou undefined ele sera considerado 1. Operador ??

  // somar os pessos
  // vamos dividir a soma que obtivemos da funçao de cima pelo soma dos pessos
  const weigthSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );
  return sum / weigthSum;
};
// caso weight seja nulo ou undefined ele sera considerado 1. Operador ??
console.log(
  `Media Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
);

const median = (...numbers) => {
  //funçao que vai ordenar os numeros para sempre calcular da forma correta
  // criando uma variavel nos não modificaremos o arrey (numbers), pois nos vamos usar o metodo sort e este metodo ele modifica o arrey onde ele é chamado.
  // [...numbers].sort = clonando o arrey
  const orderedNumbers = [...numbers].sort((a, b) => a - b); // com isso nos estamos ordenado na forma crescente
  // para calcular a mediana nos precisamos descubrir onde é o meio do arrey
  // vamos usar o comprimento do arrey com o Math.floor
  const middle = Math.floor(orderedNumbers.length / 2); //pegando o comprimento do arrey e dividindo por 2
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
    //quando nos temos um numero impar sempre havera um numero no meio e esse meio é o "orderedNumbers[middle]"
  }
  //1, 2, 3, 4
  //0, 1, 2, 3
  //nosso middle é 4/2 e o elemento na posição 2 é sempre o segundo depois da metade
  const firtMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return average(firtMedian, secondMedian);
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

const mode = (...numbers) => {
  // vamos verificar qual é o elemento que mais aparece nestes parametros
  // essa variavel vai contar quanras vezes cada elemento aparece
  // vamos usar o "map" ele vai pegar o arrey e transformar em outro mapeando todo ele, mostrando os numeros e a quantidade que eles aparecem.
  //
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
    //fintrando os elementos que estão no arrey principal que são iguais os elementos atuais a onde estamos
    //estamos no map, para cada um dos numeros fazendo o filter em todos os numero que ele aparece e ele vai devolver todas as ocorrencias deste numero
  ]);

  //vamos ordenar o quantities na ordem decrecente, entao o elemento que tiver a maior quantidade aparecera em primero
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};
console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);

//Codigo sem anotaçoes
const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};

console.log(`Média Simples: ${average(3, 6, 10, 9)}`);

const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * weight,
    0
  );
  const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0);
  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7, weight: 1 },
    { number: 10, weight: 1 }
  )}`
);

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

const mode = (...numbers) => {
  const quantities = numbers.map((number) => [
    number,
    numbers.filter((n) => number === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);
