import { second } from '../src';

test('second([]) = undefined', () =>
  expect(second([])).toBe(undefined)
);

test('second([0]) = undefined', () =>
  expect(second([0])).toBe(undefined)
);

test('second([0, 1]) = 1', () =>
  expect(second([0, 1])).toBe(1)
);

test('second([0, 1, 2]) = 1', () =>
  expect(second([0, 1, 2])).toBe(1)
);
