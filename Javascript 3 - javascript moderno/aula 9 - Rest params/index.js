function sum(...numbers) {
  // este parametro é um arrey
  return numbers.reduce((accum, num) => accum + num, 0);
  //accum: acumulador, resultado acumulado.  num: elemento atual.
  //fazendo a soma de todos on numeros de um arrey
  //quando estamos trabalhando com os Rest params sempre colocamos ele no final na função
}

console.log(sum(1, 1));
console.log(sum(2, 2, 2, 2, 2, 2));
console.log(sum(32, 5, 74, 25, 56, 90));
