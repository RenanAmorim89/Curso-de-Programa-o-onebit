class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; //Definindo uma regra, da forma que esta ele passara a ser um numero inteiro 10099, pois assuim ele se torna melhor para se trabalhar. Multiplicando por 100 ele passa a ser um numero inteiro.
  }
  //Temos um atributo privado, mas queremos ler ele fora da class, para isso vamos definir um getter para ele.
  get amount() {
    return this.#amount / 100; //Dividindo por 100 para quando for feito a leitura o valor sera devolvido da forma correta
  }
  //Importante que sempre se passe os parametros no "set"
  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log("username must be of type string");
    }
  }
  get username() {
    return this.#username;
  }
}

const myWallter = new Wallet();

console.log(myWallter.amount);

myWallter.username = "Renan";
console.log(myWallter.username);

myWallter.username += " Amorim";
console.log(myWallter.username);

myWallter.username = true;
