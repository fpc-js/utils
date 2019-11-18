import { expectFunction } from '@fpc/types';

export const pass = (val, fn, ...args) => {
  args.unshift(val);
  expectFunction(fn)(...args);

  return val;
};
