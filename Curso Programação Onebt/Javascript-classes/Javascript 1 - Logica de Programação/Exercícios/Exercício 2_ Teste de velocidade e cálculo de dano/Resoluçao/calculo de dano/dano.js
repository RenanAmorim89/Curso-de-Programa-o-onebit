const attacker = prompt("what is the name of the attacking character");
const attackPower = prompt("what is your attack power?");

const defender = prompt("what is the name of the defending character");
//use "let" because the value will change.
let healthPoints = prompt("How many life points does he have?");
const defenderPower = prompt("What is your attack power?");
const hasAShield = prompt("Does he have a shield? (Yes/No)");

let damageCaused = 0;

if (attackPower > defenderPower && hasAShield === "No") {
  damageCaused = attackPower - defenderPower;
} else if (attackPower > defenderPower && hasAShield === "Yes") {
  damageCaused = (attackPower - defenderPower) / 2;
}

healthPoints -= damageCaused;

alert(attacker + " caused " + damageCaused + " hit points in " + defender);
alert(
  attacker +
    "\nAttack Power: " +
    attackPower +
    "\n\n" +
    defender +
    "\nHealth Points: " +
    healthPoints +
    "\nDefender Power: " +
    defenderPower +
    "\nHas a Shield: " +
    hasAShield
);
