import { phoneNumber } from '../Validator';

test('foreign phone number is returned in follow format +4625000000', () => {
  expect(phoneNumber('46 (250) 000-000')).toBe('+46250000000');
});

test('local phone number is returned in follow format +7925000000', () => {
  expect(phoneNumber('+8 (925) 000-000')).toBe('+7925000000');
});
