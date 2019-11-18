import { failWith } from '../src';

const custom = new Error('Custom!');

test('failWith throws when called without arguments', () =>
  expect(failWith).toThrow()
);

test('failWith throws its argument', () =>
  expect(() => failWith(custom)).toThrow(custom)
);
