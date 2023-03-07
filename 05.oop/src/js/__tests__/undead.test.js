import Undead from '../Undead';

const sampleUndead = {
  name: 'Seryoga',
  type: 'Undead',
  level: 1,
  health: 100,
  attack: 25,
  defence: 25,
};
const heroUndead = new Undead('Seryoga');

test('created Undead has all properties', () => {
  expect(heroUndead).toEqual(sampleUndead);
});
