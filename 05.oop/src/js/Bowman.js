import Character from './Character';

export default class Bowman extends Character {
  constructor(name, type, attack, defence) {
    super(name, type = 'Bowman', attack = 25, defence = 25);
  }
}
