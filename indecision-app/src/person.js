
const isAdult = (a) => a >= 18;
const canDrink = (b) => b >= 21;
const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default }

// export default (age) => age >= 65;