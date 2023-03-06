import Character from './Character';

export default class Magician extends Character {
  constructor(name, type, attack, defence) {
    super(name, type = 'Magician', attack = 10, defence = 40);
  }
}
