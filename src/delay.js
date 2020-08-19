import { expectFunction } from '@fpc/types';

/* global Promise */

export const delay = (fn, ms = 0) => {
  expectFunction(fn);

  return new Promise((resolve, reject) =>
    setTimeout(() => fn(resolve, reject), ms)
  );
};
