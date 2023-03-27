import Character from './Character';

export default class MagicClass extends Character {
  constructor(name, type, attackPrivate, defence) {
    super(name, type, attackPrivate, defence);
    this.newAttack = null;
  }

  get stoned() {
    return this.newAttack;
  }

  set stoned(cell) {
    this.newAttack = this.attackPrivate - Math.log2(cell) * 5;
    if (this.newAttack < 0) this.newAttack = 0;
  }

  get attack() {
    return this.newAttack;
  }

  set attack(cell) {
    this.newAttack = (1 - cell / 10) * this.attackPrivate;
    if (this.newAttack < 0) this.newAttack = 0;
  }
}
