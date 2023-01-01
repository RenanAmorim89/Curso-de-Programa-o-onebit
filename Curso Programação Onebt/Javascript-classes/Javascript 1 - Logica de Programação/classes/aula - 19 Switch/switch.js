const result = prompt("choose an alternative: \n1)\n2)\n3");

const numericalResult = parseFloat(result);

switch (result) {
  case "1":
    alert("the result is 'a'");
    break;
  case "2":
    alert("the result is 'b'");
    break;
  case "3":
    alert("the result is 'c'");
  default:
    alert("Finishing...");
}
