// //[Objetos no JS]=> São estruturas no estilo de coleção, onde podemos armazenar dados no farmato chave-valor
// //[Title esta associado ao book]
// // Nos objetos conseguimos atribuir esses valores em varios formatos
// const book = {
//   title: "Eragon",
//   pages: 485, // Numericos
//   published: true, // Valores buleanos
//   inStock: 20, //Numericos
//   // Tambem podemos armazenar outras estruturas
//   tags: ["fantasy", "adventure", "medieval"], // arreys
//   //Tambem é possivel colocar outros obetos dentro do objeto
//   author: {
//     name: "Christopher Paolini",
//   },
//   //Tambem é possivel associar aos objetos metodos que são funções
//   // este metodo recebe uma parametro.
//   // Tenho acesso ao escopo atraves do "this"//
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
//   // //podemos tambem usar (funçoes anonimas), dalvar elas dentro de Prpriedades
//   // save: function () {
//   //   //salva no banco de dados
//   // },
// };

// console.log(book);

// book.addOnStock(50);

// // console.log(book.inStock);

// // book.save = function () {
// //   //salva no banco de dados
// // };

// console.log(book);

//funçoes Construtoras, são basicamente fabrica de objetos. Aqui nos temos o nosso Objeto "book",  com essa função nos conseguimos fazer outros dele.
// Nesse modelo estamos usando o "PascalCase"
//Os parametros serao passados para criar o livro, oque ele tem em comum.
//A diferença entre uma função normal e uma construtora é que na construtora nos vamos usar o "this" ele vai pegar o contexto da função
function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false; // esta dizendo que todos os livros nao estao publicados
  this.inStock = 0; // todo o estoque vai começar em 0
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity; // esta função cuidara do estoque
  };

  this.save = function () {
    //salva no banco de dados
  };
}

const author = { name: "Christopher Paolini" };
const tags = ["fantasy", "adventure"];
// O java script tem um palavra especifica para trabalhar com este tipo objeto "new"
const eragon = new Book("Eragon", 468, tags, author);

console.log(eragon);

const eldest = new Book("Eldest", 644, tags, author);

console.log(eldest);
