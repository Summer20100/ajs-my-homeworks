export class Validator {
  constructor() {
  }

  validateUsername(name) {
    if (
      (name.search(/[\w\-]+/) !== -1)
      && (name.search(/[\d{3}]+/) === -1)
      && (name.search(/^[\d_\-]|[\d_\-]$/) === -1)
    ) { return 'Username is valid'; }
    throw new Error('please corect Username');
  }
}

export function phoneNumber(number) {
  const simpleNumber = number.replaceAll(/[\(\)\-\s]/g, '').replace(/\+/, '');
  if (simpleNumber.search(/^(89|7[9843])/) !== -1) {
    return `+${simpleNumber.replace(/^8/, '7')}`;
  }
  return `+${simpleNumber}`;
}
