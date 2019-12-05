import { expectFunction } from '@fpc/types';

export const negate = fn => (
  /* eslint-disable no-sequences */
  expectFunction(fn), (...args) => !fn(...args)
);
