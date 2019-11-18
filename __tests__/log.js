import { log } from '../src';

test('log acts as identity function', () =>
  expect(log(1, 2, 3)).toBe(1)
);
