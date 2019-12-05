import { expectFunction } from '@fpc/types';

const empty = {};

export const lazy = (fn, ...args) => {
  expectFunction(fn);

  let result = empty;

  const cached = () => (
    result === empty ? cached.update() : result
  );

  cached.update = () =>
    /* eslint no-return-assign: off */
    result = fn(...args);

  return cached;
};
