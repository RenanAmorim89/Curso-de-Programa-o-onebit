const measure = parseFloat(prompt("Enter a measurement in meters:"));

const unity = prompt(
  "what unit of measurement do you want to convert to?" +
    "\n1. milimetros (mm)" +
    "\n2. centimentros (cm)" +
    "\n3. decimetros (dm)" +
    "\n4. decâmetros (dam)" +
    "\n5. hectômetros (hm)" +
    "\n6. quilômetros (km)"
);

switch (unity) {
  case "1":
    alert("Result: " + measure + "m = " + measure * 1000 + "mm");
    break;
  case "2":
    alert("Result: " + measure + "m = " + measure * 100 + "cm");
    break;
  case "3":
    alert("Result: " + measure + "m = " + measure * 10 + "dm");
    break;
  case "4":
    alert("Result: " + measure + "m = " + measure / 10 + "dam");
    break;
  case "5":
    alert("Result: " + measure + "m = " + measure / 100 + "hm");
    break;
  case "6":
    alert("Result: " + measure + "m = " + measure / 1000 + "km");
    break;
  default:
    alert("invalid option.");
}
