import Daemon from '../Daemon';

const sampleDaemon = {
  name: 'Seryoga',
  type: 'Daemon',
  level: 1,
  health: 100,
  attack: 10,
  defence: 40,
};
const heroDaemon = new Daemon('Seryoga');

test('created Daemon has all properties', () => {
  expect(heroDaemon).toEqual(sampleDaemon);
});
