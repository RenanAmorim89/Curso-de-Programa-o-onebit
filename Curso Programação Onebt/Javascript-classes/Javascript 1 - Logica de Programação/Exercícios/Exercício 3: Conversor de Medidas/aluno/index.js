const unitInMt = prompt("enter the value");

const result = prompt("Choose an inity: \nmm)\ncm)\ndm)\ndan)\nhm)\nkm)");

const numericalResult = parseFloat(unitInMt);

switch (result) {
  case "mm":
    alert(unitInMt * 1000);
    break;
  case "cm":
    alert(unitInMt * 100);
    break;
  case "dm":
    alert(unitInMt * 10);
    break;
  case "dan":
    alert(unitInMt / 10);
    break;
  case "hm":
    alert(unitInMt / 100);
    break;
  case "km":
    alert(unitInMt / 1000);
    break;
  default:
    alert("Finishing...");
}
