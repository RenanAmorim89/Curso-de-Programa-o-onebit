const Character = require("./Character");

class Mage extends Character {
  // Vamos reescrever o Constructor pois ele tera atributos a mais.
  constructor(name, lifePts, attackPts, defensePts, magicPts) {
    super(name, lifePts, attackPts, defensePts, magicPts);
    this.magicPts = magicPts;
  }
  //Reescrevendo o metodo de attack
  attack(targetCharacter) {
    targetCharacter.lifePts -=
      this.attackPts + this.magicPts - targetCharacter.defensePts;
  }
  heal(targetCharacter) {
    targetCharacter.lifePts += this.magicPts * 2;
  }
}

module.exports = Mage;
