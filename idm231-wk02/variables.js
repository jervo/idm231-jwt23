const price = 6;
const quantity = 10;
let total = price * quantity;

console.log('total is now ' + total);
total += 7;
console.log('new total is now ' + total);

const color = 'beige';
const area = 13 * 12;
const minArea = 135;

console.group('Bedroom Details');
console.log('Color is: ' + color);
console.log(`Color is: ${color}`);
console.groupEnd();