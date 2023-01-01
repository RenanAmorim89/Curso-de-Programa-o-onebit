let start = prompt(
  "Glad to have you here.\nHere we will help you organize your finances. Are you prepared? (yes/no)"
);
if (start === "no") {
  alert("ok, when you need us we will be here.");
}

if (start === "yes") {
  alert(
    "cool, I'll start by asking a few questions and at the end of the day I'll have the result."
  );
}

let startingMoney = prompt("How many dollars do you have today?");

let addMoney = 0;
let removeMoney = 0;
const exite = alert();
const add = parseFloat(addMoney);
const rem = parseFloat(removeMoney);

alert(
  "Current money " +
    startingMoney +
    "\nadd more money?" +
    addMoney +
    "\nwithdraw cash?" +
    removeMoney
);

if (exite === 3) {
  alert("See you later");
}

let Continue = prompt("Do you want to add or remove?? (1 -Remove 2 -Add)");

while (Continue === "1") {
  let removeMoney = prompt("What quantity do you want to Remove?");
  // addMoney++;
  let result = removeMoney - startingMoney;

  alert(
    "Current money:  " +
      startingMoney +
      "\nadd more money? " +
      addMoney +
      "\nwithdraw cash? " +
      removeMoney +
      "\nTotal: " +
      result
  );
  Continue = prompt(
    "Do you want to add or remove?? (1 -Remove 2 -Add 3 -Exite)"
  );
}

while (Continue === "2") {
  let addMoney = prompt("What quantity do you want to deposit?");
  let result = removeMoney + startingMoney;

  alert(
    "Current money:  " +
      startingMoney +
      "\nadd more money? " +
      addMoney +
      "\nwithdraw cash? " +
      removeMoney +
      "\nTotal: " +
      result
  );
  Continue = prompt(
    "Do you want to add or remove?? (1 -Remove 2 -Add 3 -Exite)"
  );
}
