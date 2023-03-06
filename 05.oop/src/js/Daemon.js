import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type, attack, defence) {
    super(name, type = 'Daemon', attack = 10, defence = 40);
  }
}
