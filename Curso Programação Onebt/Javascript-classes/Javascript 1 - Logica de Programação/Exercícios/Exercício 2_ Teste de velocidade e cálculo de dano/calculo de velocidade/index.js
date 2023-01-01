const firstCar = prompt("Enter the first car");
const Speed1 = prompt("Enter speed of the first care");

const secondCar = prompt("Enter the second car");
const Speed2 = prompt("Enter second car speed");

const x = parseFloat(Speed1);
const y = parseFloat(Speed2);

const result = Speed1 < Speed2 ? "Winner Car 1" : "Winner Car 2";

alert(
  "Successfully Registered!\n" +
    "\n First Car: " +
    firstCar +
    " " +
    "\n Speed first: " +
    Speed1 +
    "\n Second Car: " +
    secondCar +
    " " +
    "\n Speed second: " +
    Speed2 +
    "\nResult: " +
    result
);
