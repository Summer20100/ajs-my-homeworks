import Team from '../Set';

const magician = {
  health: 100,
  type: 'Magician',
  level: 1,
  attack: 10,
  defence: 40,
};

const bowman = {
  health: 100,
  type: 'Bowman',
  level: 1,
  attack: 25,
  defence: 25,
};

const daemon = {
  health: 100,
  type: 'Daemon',
  level: 1,
  attack: 10,
  defence: 40,
};

const zombie = {
  health: 100,
  type: 'Zombie',
  level: 1,
  attack: 40,
  defence: 10,
};

const undead = {
  health: 100,
  type: 'Undead',
  level: 1,
  attack: 25,
  defence: 25,
};

const heroList = new Team();
heroList.add(magician);

test('hero is added', () => {
  const result = new Set([magician]);
  expect(heroList.members).toEqual(result);
});

test('method Team.add(member) is trowing error', () => {
  expect(() => { heroList.add(magician); }).toThrow('the hero was added before');
});

test('method Team.addAll(...members) adds list of heros', () => {
  const result = new Set([magician, bowman, daemon, zombie, undead]);
  heroList.addAll(bowman, daemon, zombie, undead);
  expect(heroList.members).toEqual(result);
});

test('method Team.toArray() triggers array of heroes', () => {
  expect(heroList.toArray()).toEqual([magician, bowman, daemon, zombie, undead]);
});
