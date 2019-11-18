import { pass, identity } from '../src';

test('pass applies its first argument to given function', () =>
  expect(pass(1, identity)).toBe(1)
);

test('pass applies all other arguments to given function', () => {
  const fn = jest.fn((a, b, c) => a + b + c);

  expect(pass(1, fn, 2, 3)).toBe(1);
  expect(fn.mock.calls.length).toBe(1);
  expect(fn.mock.calls[0]).toEqual([1, 2, 3]);
});
