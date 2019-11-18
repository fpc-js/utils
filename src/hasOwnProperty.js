const hop = {}.hasOwnProperty;

export const hasOwnProperty = (val, key) => (
  val == null ? false : hop.call(val, key)
);
