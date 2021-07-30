import { identity } from '../src/index.js';

/* eslint-disable no-magic-numbers */

test('identity(NaN) = NaN', () =>
  expect(identity(NaN)).toBe(NaN)
);

test('identity(undefined) = undefined', () =>
  expect(identity(undefined)).toBe(undefined)
);

test('identity(null) = null', () =>
  expect(identity(null)).toBe(null)
);

test('identity(true) = true', () =>
  expect(identity(true)).toBe(true)
);

test('identity(0.1) = 0.1', () =>
  expect(identity(0.1)).toBe(0.1)
);
