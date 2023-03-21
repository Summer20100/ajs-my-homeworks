export default class ErrorRepository {
  constructor() {
    this.clientErrors = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorized '],
      [402, 'Payment Required'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
    ]);
  }

  translate(code) {
    let result;
    this.clientErrors.has(code) ? result = this.clientErrors.get(code) : result = 'Unknown error';
    return result;
  }
}
