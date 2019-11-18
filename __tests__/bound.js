import { bound } from '../src';

/* eslint-disable no-magic-numbers */

test('bound(1, 4, 6) = 4', () =>
  expect(bound(1, 4, 6)).toBe(4)
);

test('bound(5, 4, 6) = 5', () =>
  expect(bound(5, 4, 6)).toBe(5)
);

test('bound(7, 4, 6) = 6', () =>
  expect(bound(7, 4, 6)).toBe(6)
);
