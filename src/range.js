/* eslint-disable no-mixed-operators */
export const range = (start, end, step = 1) =>
  Array(1 + Math.floor((end - start) / step))
    .fill(0)
    .map((_, idx) => idx * step + start);
