const App = require("./App");

App.creatUser("renan@email.com", "Renan Amorim");
App.creatUser("weslayne@email.com", "Weslayne Amorim");
App.creatUser("leitao@email.com", "Leitao Amorim");

App.deposit("renan@email.com", 100);

App.transfer("renan@email.com", "weslayne@email.com");

App.changeLoanFee(10);
App.takeLoan("leitao@email.com", 2000, 24);

console.log(App.findUser("renan@email.com"));
console.log(App.findUser("renan@email.com").account);
console.log(App.findUser("weslayne@email.com"));
console.log(App.findUser("weslayne@email.com").account);
console.log(App.findUser("leitao@email.com"));
console.log(App.findUser("leitao@email.com").account);
console.log(App.findUser("leitao@email.com").account.loans[0].installments);
