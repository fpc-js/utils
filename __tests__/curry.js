import { curry, identity } from '../src/index.js';

/* eslint-disable no-magic-numbers */

const sum3 = curry((a, b, c) => a + b + c);
const list = (...args) => args;

test('curry works for functions with esplicit parameters', () => {
  expect(sum3(1)(2)(3)).toBe(6);
  expect(sum3('x')('y')('z')).toBe('xyz');
});

test('curry works with partial application', () => {
  expect(sum3(1, 2, 3)).toBe(6);
  expect(sum3(1, 2)(3)).toBe(6);
  expect(sum3(1)(2, 3)).toBe(6);
  expect(sum3()(1)()(2)()(3)).toBe(6);
});

test('curry throws if the second argument is a non-positive integer', () =>
  expect(() => curry(identity, -1))
    .toThrow(new TypeError('Expected positive integer, got -1'))
);

test('curry throws if its functions is vararg', () =>
  expect(() => curry(list))
    .toThrow(new TypeError('Expected positive integer, got 0'))
);

test('curry works with varargs when arity is explicit', () => {
  expect(curry(list, 2)(1)(2)).toEqual([1, 2]);
  expect(curry(list, 3)(1)(2)(3)).toEqual([1, 2, 3]);
});
