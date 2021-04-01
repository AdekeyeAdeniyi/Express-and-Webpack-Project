import { isValid } from './urlValidator'

describe('validating url', () => {
  it('should return false with an invalid url', () => {
    expect(isValid('test')).toBe(false);
  });

  it('should return true with a valid url', () => {
    expect(isValid('google.com')).toBe(true);
  });
});

