const arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

const sum = (arr) => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);

console.log(sum(arr));