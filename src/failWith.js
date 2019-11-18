import { isString } from '@fpc/types';

export const failWith = e => {
  throw e && isString(e.stack) && isString(e.message) ? e : new Error(e);
};
