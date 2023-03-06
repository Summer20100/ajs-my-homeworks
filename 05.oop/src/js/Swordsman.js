import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type, attack, defence) {
    super(name, type = 'Swordsman', attack = 40, defence = 10);
  }
}
