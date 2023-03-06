import Character from './Character';

export default class Undead extends Character {
  constructor(name, type, attack, defence) {
    super(name, type = 'Undead', attack = 25, defence = 25);
  }
}
