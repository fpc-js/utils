import { failWith } from '../src/index.js';

const custom = new Error('Custom!');

test('failWith throws when called without arguments', () =>
  expect(failWith).toThrow()
);

test('failWith throws its argument', () =>
  expect(() => failWith(custom)).toThrow(custom)
);
