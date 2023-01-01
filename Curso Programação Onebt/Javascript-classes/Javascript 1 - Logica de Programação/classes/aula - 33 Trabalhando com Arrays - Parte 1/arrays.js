const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
// Add Elements
// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
//       Adds an element to the end of the array and returns the new array size
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
//          Adds an element to the beginning of the array and returns the new array size
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

// pop: Remove um elemento no final do array e devolve o elemento removido
//      Removes an element at the end of the array and returns the removed element
let elementoRemovido = arr.pop("Boromir");
console.log(arr);
console.log(elementoRemovido);

// shift: Remove um elemento no começo do array e devolve o elemento removido
//        Removes an element at the beginning of the array and returns the removed element
elementoRemovido = arr.shift("Boromir");
console.log(arr);
console.log(elementoRemovido);

// includes: Verifica se um certo elemento está presente no array
//           Checks if a certain element is present in the array
const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
//          Finds the index that has the indicated element, or -1 if it does not exist in the array
const indice = arr.indexOf("Gandalf");
console.log(indice);

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
//        Copies a part of the array and returns the copied part without changing the original array

const hobbits = arr.slice(0, 4);
// Também pode ser usado com números negativos referenciar o final do array
// can also be used with negative numbers referencing the end of the array
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
//         Joins two or more arrays and/or items and returns the result (without changing any of the arrays)
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);
console.log(hobbits);
console.log(outros);

// splice: Permite remover elementos em qualquer posição do array e substituir por novos
//         Allows to remove elements in any position of the array and replace with new ones
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(elementosRemovidos);
console.log(sociedade);

// Usando o for para percorrer cada elemento do array
// Using for to loop through each array element
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
