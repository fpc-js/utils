import { pair } from '../src';

test('pair creates an array', () =>
  expect(pair(1, 2)).toEqual([1, 2])
);

test('pairs are two elements array', () =>
  expect(pair().length).toBe(2)
);
