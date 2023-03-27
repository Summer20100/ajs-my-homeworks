import Character from '../Character';

const sampleCharacter = {
  name: 'Seryoga',
  type: 'Bowman',
  level: 1,
  health: 100,
  attackPrivate: 25,
  defence: 25,
};
const heroCharacter = new Character('Seryoga', 'Bowman', 25, 25);

const sampleCharacterLevUp = {
  name: 'Seryoga',
  type: 'Bowman',
  level: 2,
  health: 200,
  attackPrivate: 30,
  defence: 30,
};
const heroCharacterLevUp = new Character('Seryoga', 'Bowman', 25, 25);

const sampleCharacterLevUpDead = new Character('Seryoga', 'Bowman', 25, 25);
sampleCharacterLevUpDead.health = 0;

const sampleCharacterDamage = {
  name: 'Seryoga',
  type: 'Bowman',
  level: 1,
  health: 85,
  attackPrivate: 25,
  defence: 25,
};
const heroCharacterDamage = new Character('Seryoga', 'Bowman', 25, 25);

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

test('method levelUp() increases hero level', () => {
  heroCharacterLevUp.levelUp();
  expect(heroCharacterLevUp).toEqual(sampleCharacterLevUp);
});

test('method levelUp() thows new Error for dead hero', () => {
  expect(() => { sampleCharacterLevUpDead.levelUp(); }).toThrow('your hero is dead');
});

test('method damage() affects hero', () => {
  heroCharacterDamage.damage(20);
  expect(heroCharacterDamage).toEqual(sampleCharacterDamage);
});

test('method damage() thows new Error for dead hero', () => {
  expect(() => { sampleCharacterLevUpDead.damage(20); }).toThrow('your hero is dead');
});
