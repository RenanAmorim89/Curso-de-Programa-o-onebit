const Character = require("./Character");

class Thief extends Character {
  //O metodo attack sera sobre escrito
  attack(targetCharacter) {
    targetCharacter.lifePts -=
      (this.attackPts - targetCharacter.defensePts) * 2;
  }
}

module.exports = Thief;
