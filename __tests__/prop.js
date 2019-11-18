import { prop } from '../src';

test('prop returns `undefined` on non-objects', () => {
  expect(prop(null, 'any')).toBe(undefined);
  expect(prop(undefined, 'any')).toBe(undefined);
  expect(prop(NaN, 'any')).toBe(undefined);
  expect(prop(true, 'any')).toBe(undefined);
});

test('prop returns the value for the given key', () =>
  expect(prop({ key: 1 }, 'key')).toBe(1)
);
