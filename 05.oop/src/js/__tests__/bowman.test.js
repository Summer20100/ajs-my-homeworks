import Bowman from '../Bowman';

const sampleBowman = {
  name: 'Seryoga',
  type: 'Bowman',
  level: 1,
  health: 100,
  attack: 25,
  defence: 25,
};
const heroBowman = new Bowman('Seryoga');

test('created Bowman has all properties', () => {
  expect(heroBowman).toEqual(sampleBowman);
});
