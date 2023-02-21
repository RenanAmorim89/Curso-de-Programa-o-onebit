module.exports = class Installment {
  constructor(value, number) {
    this.value = value;
    this.number = number;
    // statis da parcela
    this.status = "pending";
  }
};
