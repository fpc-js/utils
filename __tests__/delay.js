import { delay } from '../src';
import { isPromise } from '@fpc/types';

test('delay creates a promise', () =>
  expect(isPromise(delay(() => 0))).toBe(true)
);

test('delay expects a function', () =>
  expect(() => delay(null)).toThrow()
);

test('delay(resolve => resolve(1)) ~ Promise.resolve(1)', () =>
  delay(resolve => resolve(1)).then(res => expect(res).toBe(1))
);

test('delay((resolve, reject) => reject(1)) ~ Promise.reject(1)', () =>
  delay((resolve, reject) => reject(1)).catch(err => expect(err).toBe(1))
);
