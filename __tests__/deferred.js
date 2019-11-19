import { deferred, failWith } from '../src';
import { isPromise, isFunction } from '@fpc/types';

test('deferred creates a promise', () =>
  expect(isPromise(deferred().promise)).toBe(true)
);

test('deferred().resolve is a function', () =>
  expect(isFunction(deferred().resolve)).toBe(true)
);

test('deferred().reject is a function', () =>
  expect(isFunction(deferred().reject)).toBe(true)
);

test('deferred().resolve resolves the promise', () => {
  const { promise, resolve } = deferred();

  resolve(1);

  return promise.then(val => expect(val).toBe(1));
});

test('deferred().reject rejects the promise', () => {
  const { promise, reject } = deferred();

  reject('Oh no!');

  return promise.then(failWith, err => expect(err).toBe('Oh no!'));
});
