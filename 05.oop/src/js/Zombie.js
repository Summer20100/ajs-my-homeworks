import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type, attack, defence) {
    super(name, type = 'Zombie', attack = 40, defence = 10);
  }
}
