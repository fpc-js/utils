import { identity } from './identity.js';

export const log =
  typeof console === 'object'
    ? (...args) => {
      console.log(...args);

      return args[0];
    }
    : identity;
