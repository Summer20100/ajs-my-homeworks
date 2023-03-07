export default class Character {
  constructor(name, type, attack, defence) {
    if (Object.entries(name).length < 2 || Object.entries(name).length > 10) {
      throw new Error('name should have length more 2 and less 10');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (!types.includes(type)) {
      throw new Error('type should be one of the list - Bowman, Swordsman, Magician, Daemon, Undead or Zombie');
    }

    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('your hero is dead');
    }
    this.level += 1;
    this.attack = 1.2 * this.attack;
    this.defence = 1.2 * this.defence;
    this.health += 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('your hero is dead');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
