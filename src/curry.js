import { isInteger } from '@fpc/types';
import { curry as unsafeCurry } from './internals';
import { failWith } from './failWith';

export const curry = (fn, numArgs = fn.length) => (
  isInteger(numArgs) && numArgs > 0
    ? unsafeCurry(fn, numArgs)
    : failWith(new TypeError(`Expected positive integer, got ${numArgs}`))
);
