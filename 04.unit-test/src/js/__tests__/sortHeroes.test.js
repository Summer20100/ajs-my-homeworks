import { sortHeroes } from '../app';

const user = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const result = sortHeroes(user);

const userSort = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sould be sort', () => {
  expect(result).toEqual(userSort);
});
