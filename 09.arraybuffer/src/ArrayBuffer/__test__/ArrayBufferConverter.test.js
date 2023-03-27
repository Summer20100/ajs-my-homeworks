import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

const data = new ArrayBufferConverter();
data.load(getBuffer());

test('recieved data is transformed into string format', () => {
  expect(data.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
