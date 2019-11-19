/* global Promise */

export const deferred = () => {
  let resolve, reject;

  /* eslint-disable no-return-assign, no-sequences */
  const promise = new Promise((res, rej) => (resolve = res, reject = rej));

  return { promise, resolve, reject };
};
