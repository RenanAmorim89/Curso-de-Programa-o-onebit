let balance = prompt("Enter the initial amount of money");
balance = parseFloat(balance);

let option = "";

do {
  option = prompt(
    "balance available: $ " +
      balance +
      "\n1. add money" +
      "\n2. remove money" +
      "\n3. exite"
  );

  switch (option) {
    case "1":
      balance += parseFloat(prompt("inform the value to be added"));
      break;
    case "2":
      balance -= prompt("inform the value to be removed");
      break;
    case "3":
      alert("Exite...");
      break;
    default:
      alert("Invalid Input");
  }
} while (option !== "3");
