import { call } from '../src';

/* eslint-disable no-magic-numbers */

const obj = {
  returnThisProp () {
    return this.prop;
  },

  returnArgs (...args) {
    return args;
  },
};

test('call binds the context object', () => {
  obj.prop = 1;
  expect(call(obj, 'returnThisProp')).toBe(1);

  obj.prop = 2;
  expect(call(obj, 'returnThisProp')).toBe(2);
});

test('call pass its arguments to object method', () => {
  expect(call(obj, 'returnArgs')).toEqual([]);
  expect(call(obj, 'returnArgs', 1, 2, 3)).toEqual([1, 2, 3]);
});
