import Magician from '../Magician';

const sampleMagician = {
  name: 'Seryoga',
  type: 'Magician',
  level: 1,
  health: 100,
  attackPrivate: 10,
  defence: 40,
  newAttack: null,
};
const heroMagician = new Magician('Seryoga');

test('created Magician has all properties', () => {
  expect(heroMagician).toEqual(sampleMagician);
});

test('hero attack on non-magicians reduces based on distance (cells) for Magician more then 10 cells', () => {
  heroMagician.attack = 12;
  expect(heroMagician.attack).toBe(0);
});

test('hero attack on magicians reduces based on distance (cells) for Magician to be 0', () => {
  heroMagician.stoned = 5;
  expect(heroMagician.stoned).toBe(0);
});
