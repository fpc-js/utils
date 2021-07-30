import { last } from '../src/index.js';

test('last([]) = undefined', () =>
  expect(last([])).toBe(undefined)
);

test('last([0]) = 0', () =>
  expect(last([0])).toBe(0)
);

test('last([0, 1]) = 1', () =>
  expect(last([0, 1])).toBe(1)
);

test('last([0, 1, 2]) = 2', () =>
  expect(last([0, 1, 2])).toBe(2)
);
