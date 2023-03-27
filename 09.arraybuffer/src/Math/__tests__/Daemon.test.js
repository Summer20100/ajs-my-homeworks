import Daemon from '../Daemon';

const sampleDaemon = {
  name: 'Seryoga',
  type: 'Daemon',
  level: 1,
  health: 100,
  attackPrivate: 10,
  defence: 40,
  newAttack: null,
};
const heroDaemon = new Daemon('Seryoga');

test('created Daemon has all properties', () => {
  expect(heroDaemon).toEqual(sampleDaemon);
});

test('hero attack on non-magicians reduces based on distance (cells) for Daemon', () => {
  heroDaemon.attack = 5;
  expect(heroDaemon.attack).toBe(5);
});

test('hero attack on magicians reduces based on distance (cells) for Daemon', () => {
  heroDaemon.stoned = 2;
  expect(heroDaemon.stoned).toBe(5);
});
