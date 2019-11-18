export const prop = (val, key) => (
  val == null ? undefined : val[key]
);
