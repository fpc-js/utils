import { hasOwnProperty } from '../src';

test('hasOwnProperty checks whether an object has a specified property', () =>
  expect(hasOwnProperty({ someProp: 1 }, 'someProp')).toBe(true)
);

test('hasOwnProperty("toString") = false', () =>
  expect(hasOwnProperty({}, 'toString')).toBe(false)
);

test('hasOwnProperty("hasOwnProperty") = false', () =>
  expect(hasOwnProperty({}, 'hasOwnProperty')).toBe(false)
);

test('hasOwnProperty works on null values', () =>
  expect(hasOwnProperty(null, 'any')).toBe(false)
);

test('hasOwnProperty works on undefined values', () =>
  expect(hasOwnProperty(undefined, 'any')).toBe(false)
);
