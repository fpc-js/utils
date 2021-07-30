import { isInteger, expectFunction } from '@fpc/types';
import { curry as unsafeCurry } from './internals/curry.js';
import { failWith } from './failWith.js';

export const curry = (fn, numArgs = fn.length) => (
  isInteger(numArgs) && numArgs > 0
    ? unsafeCurry(expectFunction(fn), numArgs)
    : failWith(new TypeError(`Expected positive integer, got ${numArgs}`))
);
