// Desestruturando as Propriedades de um objeto

const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"],
};

// Criando Variaveis apartir desses objetos
// Forma tradicional
const name = person.name;
// Duas fornas iguais de fazer a mesma coisa.
// Desestruturação
const { job, parents } = person; // podemos passar mais de uma propridade
console.log(name, job, parents);

//Desestruturando as Propriedades de um arrey
// Trocamos as chaves{} pelos Colchetes[]

const [father, mother] = parents; // estamos quebrando o arrey "parents" e
//trabalhamos com a ordem do arreys do primeio ao ultimo
console.log(father, mother);

//Tambem conseguimos fazer isso com funçoes
function createUser(person) {
  const id = Math.floor(Math.random() * 9999);
  //Math = ob.global Fun.matematica,
  //flor = arrendondar um numero para baixo, Ex: 10,20 ele do vai pergar o 10
  //(Math.random() * 9999) Math.random = um pegando um numero aliatorio entre 0 e 1 e multiplicando por 9999
  return {
    id,
    name: person.name,
    job: person.job,
    parents: person.parents,
  };
}

const Luke = createUser(person);

console.log(Luke);

//Simplificando o codigo
//Podemos desestruturar nos Parametros, os parametros são como declarações de variaveis
//podemos desestruturar direto nos parametros, colocar oque precimos
//Podemos identificalos pelas {}
function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999);
  return {
    //nao precisamos mais refenciar person.alguma coisa, pois ja quebramos em variaveis logo no começo
    id,
    name,
    job,
    parents,
  };
}
