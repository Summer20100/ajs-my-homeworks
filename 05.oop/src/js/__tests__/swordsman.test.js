import Swordsman from '../Swordsman';

const sampleSwordsman = {
  name: 'Seryoga',
  type: 'Swordsman',
  level: 1,
  health: 100,
  attack: 40,
  defence: 10,
};
const heroSwordsman = new Swordsman('Seryoga');

test('created Swordsman has all properties', () => {
  expect(heroSwordsman).toEqual(sampleSwordsman);
});
