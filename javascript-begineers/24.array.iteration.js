// // forEach
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value) {
//     console.log(value * value)
// }
// numbers.forEach(myFunction)

// // map()
// const numbers1 = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
//     return value * 2
// }

// const map = numbers1.map(myFunction)
// console.log(map);

// // flatMap()
// const myArr = [1, 2, 3, 4, 5, 6];
// const flatMap = myArr.flatMap((x) => x * 2)
// console.log(flatMap);

// // filter
// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value, index, array) {
//     return value > 18
// }

// const filter = numbers.filter(myFunction)
// console.log(filter);

// //reduce
// const numbers = [45, 4, 9, 16, 25];
// function myFunction(total, value, index, array) {
//     return total + value
// }

// const reduce = numbers.reduce(myFunction, 100)
// console.log(reduce);

// //reduceRight()
// const numbers = [45, 4, 9, 16, 25];
// function myFunction(total, value, index, array) {
//     return total + value;
// }

// const reduceRight = numbers.reduceRight(myFunction, 100)
// console.log(reduceRight);

// // every()
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
//     return value > 18
// }

// const every = numbers.every(myFunction)
// console.log(every);

// //some()
// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value, index, array) {
//     return value > 18
// }

// const some = numbers.some(myFunction)
// console.log(some);

// //keys()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys()
// console.log(keys);

// // from()
// console.log(Array.from("ABCDEFG"));

// // entries()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.entries());

// // with()
// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March")
// console.log(myMonths);

// spread
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4]
console.log(year);


