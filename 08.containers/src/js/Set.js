export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    const count = this.members.size;
    this.members.add(character);
    if (count === this.members.size) {
      throw new Error('the hero was added before');
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    const arr = [];
    this.members.forEach((character) => arr.push(character));
    return arr;
  }
}
