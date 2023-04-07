const mango = (quantity, price) => price * Math.ceil(quantity - quantity / 3);

console.log(mango(2, 3));
console.log(mango(3, 3));
console.log(mango(5, 3));
console.log(mango(9, 5));