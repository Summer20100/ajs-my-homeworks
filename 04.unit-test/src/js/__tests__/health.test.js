import { healthLine } from '../app';

const user = {
  name: 'Маг',
  health: 90,
};
const result = healthLine(user);

test('should color line', () => {
  expect(result).toBe('healthy');
});
