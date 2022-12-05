import { lazy } from '../src/index.js';
import { jest } from '@jest/globals';

/* eslint-disable no-magic-numbers */

const uniqid = () => {
  let id = 0;

  /* eslint-disable-next-line no-plusplus */
  return () => id++;
};

test('lazy does not call its function immediately', () => {
  const fn = jest.fn();
  lazy(fn);

  expect(fn.mock.calls.length).toBe(0);
});

test('lazy calls its function on first invokation', () => {
  const fn = jest.fn();
  lazy(fn)();

  expect(fn.mock.calls.length).toBe(1);
});

test('lazy pass its arguments to its function', () => {
  const fn = jest.fn();
  lazy(fn, 1, 2, 3)();

  expect(fn.mock.calls.length).toBe(1);
  expect(fn.mock.calls[0]).toEqual([1, 2, 3]);
});

test('lazy caches the result of the first invokation', () => {
  const c1 = lazy(uniqid());
  expect(c1()).toBe(c1());

  const c2 = lazy(Math.random);
  expect(c2()).toBe(c2());
});

test('lazy calls its function on `update` method invokation', () => {
  const cached = lazy(uniqid());

  expect(cached()).toBe(0);
  expect(cached()).toBe(0);

  expect(cached.update()).toBe(1);
  expect(cached()).toBe(1);

  expect(cached.update()).toBe(2);
  expect(cached()).toBe(2);

  const c2 = lazy(Math.random);
  expect(c2()).toBe(c2());
});
