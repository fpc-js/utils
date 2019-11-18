export const curry = (fn, numArgs, args = []) => (
  args.length < numArgs
    ? (...innerArgs) => curry(fn, numArgs, args.concat(innerArgs))
    : fn(...args)
);
