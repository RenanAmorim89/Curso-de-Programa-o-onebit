const Installment = require("./Installment");

module.exports = class Loan {
  static #fee = 1.05;

  constructor(value, installments) {
    this.value = value;
    //para cada uma das parcelas(installments) teremos que instanciar um novo installments
    this.installments = [];
    for (let i = 1; i <= installments; i++) {
      this.installments.push(
        new Installment((value * Loan.#fee) / installments, i)
      );
    }
    this.createdAt = new Date();
  }

  //Metodo para ler o valor da taxa
  static get fee() {
    return Loan.#fee;
  }

  //Metodo para alterar a taxa
  static set fee(newFeePercentage) {
    Loan.#fee = 1 + newFeePercentage / 100;
  }
};
