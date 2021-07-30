import { negate, identity } from '../src/index.js';

const not = negate(identity);

test('casts values to booleans', () => {
  expect(not(0)).toBe(true);
  expect(not(1)).toBe(false);
  expect(not('')).toBe(true);
  expect(not(NaN)).toBe(true);
});
