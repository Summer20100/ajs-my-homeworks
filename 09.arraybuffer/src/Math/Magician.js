import MagicClass from './MagicClass';

export default class Magician extends MagicClass {
  constructor(name, type, attackPrivate, defence) {
    super(name, type = 'Magician', attackPrivate = 10, defence = 40);
  }
}
