class Account {
  #password; //quando usamos o encapsulamento precisamos refrenciar aqui no começo
  #balance = 0;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password; //Colonaco essa "#" nao sera possivel trocar os Valores
    // this.#balance = 0;
  }
  //Para ver o saldo precisamos criar um metodo.
  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }
  //Esse metodo ele vai nos retornar se o valor é verdadeiro ou falso.
  // Estamos abstraindo ele, para que ele nao seja acessivel para fora
  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "renan@email.com",
  password: "123456",
};

const myAccount = new Account(user);

console.log(myAccount.getBalance("renan@email.com", "123456")); // atraves desse metodo conseguimos visualizar o valor, mas não alteralo
