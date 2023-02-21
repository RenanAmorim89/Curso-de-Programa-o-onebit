module.exports = class Deposit {
  constructor(value) {
    this.value = value;
    //vai inserir a data atual
    this.createdAt = new Date();
  }
};
