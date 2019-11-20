import { first } from '../src';

test('first([]) = undefined', () =>
  expect(first([])).toBe(undefined)
);

test('first([0]) = 0', () =>
  expect(first([0])).toBe(0)
);

test('first([0, 1]) = 0', () =>
  expect(first([0, 1])).toBe(0)
);

test('first([0, 1, 2]) = 0', () =>
  expect(first([0, 1, 2])).toBe(0)
);
