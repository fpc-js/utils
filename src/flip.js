import { expectFunction } from '@fpc/types';

export const flip = fn => (
  /* eslint-disable no-sequences */
  expectFunction(fn), (...args) => fn(...args.reverse())
);
