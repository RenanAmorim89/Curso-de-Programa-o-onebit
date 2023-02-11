//Algo legal de se fazer é dar o mesmo nome do arquivo igual o da clase
// Os atributos sao a forma de armazenarmos os dados no objeto.
// Nas class nos fazemos com o metodo "constructor"
// Os parametros que serao passados no constructor sera o mesmo para o objeto
class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }

  publish() {
    this.published = true;
  }
}

// o "eragon" é uma instancia da class Book
const eragon = new Book("Eragon");
const eldest = new Book("Eldest");

eragon.publish();

console.log(eragon);
console.log(eldest);

//"instanceof" é como se fosse uma função a onde ele Verifica se a "instancia (eragon)" pertence a "class (Book)"
console.log(eragon instanceof Book);
