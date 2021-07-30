import { flip } from '../src/index.js';

const cat = (...args) => args.reduce((x, y) => x + y, '');

test('flip reverses arguments order of a function', () =>
  expect(flip(cat)(1, 2, 3)).toBe(cat(3, 2, 1))
);
