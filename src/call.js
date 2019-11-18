import { expectFunction } from '@fpc/types';
import { prop } from './prop';

export const call = (obj, method, ...args) =>
  expectFunction(prop(obj, method)).apply(obj, args);
