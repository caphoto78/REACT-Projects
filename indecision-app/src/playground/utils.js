console.log('utils.js is running');

export const square = (x) => x * x;
export const add = (a, b) => a + b;

const substract = (a, b) => a - b;

// const substract = (a, b) => a - b;
// export default substract;
// export default (a, b) => a - b;

// - many named exports:
// export { square, add, substract as default }; // not an object !!!

//exports - only a single default export 