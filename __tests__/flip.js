import { flip } from '../src';

const cat = (...args) => args.reduce((x, y) => x + y, '');

test('flip reverses arguments order of a function', () =>
  expect(flip(cat)(1, 2, 3)).toBe(cat(3, 2, 1))
);
