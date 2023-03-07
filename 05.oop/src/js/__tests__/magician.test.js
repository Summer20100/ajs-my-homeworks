import Magician from '../Magician';

const sampleMagician = {
  name: 'Seryoga',
  type: 'Magician',
  level: 1,
  health: 100,
  attack: 10,
  defence: 40,
};
const heroMagician = new Magician('Seryoga');

test('created Magician has all properties', () => {
  expect(heroMagician).toEqual(sampleMagician);
});
