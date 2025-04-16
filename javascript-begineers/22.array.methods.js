// // length
// const fruits = ["Banana", "Mango", "Apple", "Orange"];
// const size = fruits.length;
// console.log(size);

// //toString()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const stringFruits = fruits.toString();
// console.log(stringFruits);

// //at()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const at = fruits.at(1);
// console.log(at);

// //join
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const join = fruits.join(", ")
// console.log(join);

// //pop()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const popFruit = fruits.pop();
// console.log(fruits, popFruit);

// //push()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const push = fruits.push("Kiwi");
// console.log({ fruits }, { push });

// //shift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const shift = fruits.shift();
// console.log({ fruits }, { shift });

// //unshift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const unshift = fruits.unshift("Kiwi");
// console.log({ fruits }, { unshift });

// //length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi"
// console.log(fruits);

// // concat
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const concatArray = arr1.concat(arr2, arr2)
// console.log(concatArray);

// const arr4 = ["Cecilie", "Lone"];
// const concat = arr4.concat(" Hello")
// console.log(concat);

// //delete
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[1];
// console.log(fruits);

// //copyWithin()
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 2)
// console.log(fruits);

// //flat()
// const myArr = [[1, 2], [3, 4], [5, 6]]
// const flat = myArr.flat()
// console.log(flat);

// //flatMap()
// const myArr = [1, 2, 3, 4, 5, 6];
// const flatMap = myArr.flatMap((x) => x * x)
// console.log(flatMap);

// //splice
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const splice = fruits.splice(1, 1)
// console.log({ fruits }, { splice });

// //toSpliced()
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const toSpliced = months.toSpliced(2, 1, "1", "2")
// console.log({ months }, { toSpliced });

//slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const slice = fruits.slice(3)
console.log(slice);