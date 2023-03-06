import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';

const sampleCharacter = {
  name: 'Seryoga',
  type: 'Bowman',
  level: 1,
  health: 100,
  attack: 25,
  defence: 25,
};
const heroCharacter = new Character('Seryoga', 'Bowman', 25, 25);

const sampleCharacterLvl2 = {
  name: 'Seryoga',
  type: 'Bowman',
  level: 2,
  health: 200,
  attack: 30,
  defence: 30,
};

const sampleCharacterDead = {
  name: 'Seryoga',
  type: 'Bowman',
  level: 1,
  health: 0,
  attack: 25,
  defence: 25,
};

const sampleCharacterDamage = {
  name: 'Seryoga',
  type: 'Bowman',
  health: 91,
  level: 1,
  attack: 40,
  defence: 10,
};
const heroCharacterDamage = new Character('Seryoga', 'Bowman', 40, 10);

const sampleBowman = {
  name: 'Seryoga',
  type: 'Bowman',
  level: 1,
  health: 100,
  attack: 25,
  defence: 25,
};
const heroBowman = new Bowman('Seryoga');

const sampleSwordsman = {
  name: 'Seryoga',
  type: 'Swordsman',
  level: 1,
  health: 100,
  attack: 40,
  defence: 10,
};
const heroSwordsman = new Swordsman('Seryoga');

const sampleMagician = {
  name: 'Seryoga',
  type: 'Magician',
  level: 1,
  health: 100,
  attack: 10,
  defence: 40,
};
const heroMagician = new Magician('Seryoga');

const sampleUndead = {
  name: 'Seryoga',
  type: 'Undead',
  level: 1,
  health: 100,
  attack: 25,
  defence: 25,
};
const heroUndead = new Undead('Seryoga');

const sampleZombie = {
  name: 'Seryoga',
  type: 'Zombie',
  level: 1,
  health: 100,
  attack: 40,
  defence: 10,
};
const heroZombie = new Zombie('Seryoga');

const sampleDaemon = {
  name: 'Seryoga',
  type: 'Daemon',
  level: 1,
  health: 100,
  attack: 10,
  defence: 40,
};
const heroDaemon = new Daemon('Seryoga');


test('class throws error for name less then 2 letters', () => {
  expect(() => { new Character('S', 'Bowman', 25, 25); }).toThrow('name should have length more 2 and less 10');
});

test('class throws error for name more then 10 letters', () => {
  expect(() => { new Character('SeryogaSeryoga', 'Bowman', 25, 25); }).toThrow('name should have length more 2 and less 10');
});

test('class throws error for not class type', () => {
  expect(() => { new Character('Seryoga', 'Witch Hunter', 25, 25); }).toThrow('type should be one of the list - Bowman, Swordsman, Magician, Daemon, Undead or Zombie');
});

test('created object has all properties', () => {
  expect(heroCharacter).toEqual(sampleCharacter);
});

test('created Bowman has all properties', () => {
  expect(heroBowman).toEqual(sampleBowman);
});

test('created Swordsman has all properties', () => {
  expect(heroSwordsman).toEqual(sampleSwordsman);
});

test('created Magician has all properties', () => {
  expect(heroMagician).toEqual(sampleMagician);
});

test('created Undead has all properties', () => {
  expect(heroUndead).toEqual(sampleUndead);
});

test('created Zombie has all properties', () => {
  expect(heroZombie).toEqual(sampleZombie);
});

test('created Daemon has all properties', () => {
  expect(heroDaemon).toEqual(sampleDaemon);
});

test('method levelUp() increases unit level', () => {
  heroCharacter.levelUp();
  expect(heroCharacter).toEqual(sampleCharacterLvl2);
});

test('method levelUp() throws error for dead hero', () => {
  expect(() => { sampleCharacterDead.levelUp(); }).toThrow('your hero is dead');
});

test('throw error for dead hero with method damage()', () => {
  expect(() => { heroCharacter.damage(134); }).toThrow('your hero is dead');
});

test('method damage() affects the hero', () => {
  heroCharacterDamage.damage(10);
  expect(heroCharacterDamage).toEqual(sampleCharacterDamage);
});
