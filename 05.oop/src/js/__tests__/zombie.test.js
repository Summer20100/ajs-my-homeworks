import Zombie from '../Zombie';

const sampleZombie = {
  name: 'Seryoga',
  type: 'Zombie',
  level: 1,
  health: 100,
  attack: 40,
  defence: 10,
};
const heroZombie = new Zombie('Seryoga');

test('created Zombie has all properties', () => {
  expect(heroZombie).toEqual(sampleZombie);
});
