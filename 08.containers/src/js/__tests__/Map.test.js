import ErrorRepository from '../Map';

const clientErrors = new ErrorRepository();

test('error description is displayed', () => {
  expect(clientErrors.translate(404)).toEqual('Not Found');
});

test('error code is unknown', () => {
  expect(clientErrors.translate(500)).toEqual('Unknown error');
});
