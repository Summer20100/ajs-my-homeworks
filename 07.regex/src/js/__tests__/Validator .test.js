import { Validator } from '../Validator';

const name = new Validator();

test('correct Username', () => {
  expect(name.validateUsername('Dragon')).toBe('Username is valid');
});

test('Username contains more than 3 digits in turn', () => {
  expect(() => { name.validateUsername('dra0000gon'); }).toThrow('please corect Username');
});

test('Username starts with "-"', () => {
  expect(() => { name.validateUsername('-dragon'); }).toThrow('please corect Username');
});

test('Username starts with digit', () => {
  expect(() => { name.validateUsername('1dragon'); }).toThrow('please corect Username');
});

test('Username starts with "_"', () => {
  expect(() => { name.validateUsername('_dragon'); }).toThrow('please corect Username');
});

test('Username ends on "-"', () => {
  expect(() => { name.validateUsername('dragon-'); }).toThrow('please corect Username');
});

test('Username ends on digit', () => {
  expect(() => { name.validateUsername('dragon1'); }).toThrow('please corect Username');
});

test('Username ends on "_"', () => {
  expect(() => { name.validateUsername('dragon_'); }).toThrow('please corect Username');
});
