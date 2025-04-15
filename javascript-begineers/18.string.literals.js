const price = 10;
const vat = 0.25;

const total = `Total price is: ${price * (1 + vat).toFixed(2)}`
console.log(total);