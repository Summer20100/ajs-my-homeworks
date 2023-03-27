import MagicClass from './MagicClass';

export default class Daemon extends MagicClass {
  constructor(name, type, attackPrivate, defence) {
    super(name, type = 'Daemon', attackPrivate = 10, defence = 40);
  }
}
