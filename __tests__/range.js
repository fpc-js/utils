import { range } from '../src';

/* eslint-disable no-magic-numbers */

test('range(1, 0) is an empty array', () =>
  expect(range(1, 0)).toEqual([])
);

test('range(0, 0) = [0]', () =>
  expect(range(0, 0)).toEqual([0])
);

test('range(0, 1) = [0, 1]', () =>
  expect(range(0, 1)).toEqual([0, 1])
);

test('range third parameter is the step', () =>
  expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9])
);
