//// create a set
// const letters = new Set(["a", "b", "c"])
// console.log(object);

// const letters = new Set();
// letters.add("a")
// letters.add("b")
// console.log(letters);

// const letters = new Set()
// const a = "a"
// const b = "b"
// const c = "c"

// letters.add(a)
// letters.add(b)
// letters.add(c)

// console.log(letters);

// const letters = new Set(["a", "b", "c"])

// for (const x of letters) {
//     console.log(x);
// }


// const letters = new Set(["a", "b", "c"])
// console.log(typeof (letters));
// console.log(letters instanceof Set);

// // has
// const letters = new Set(["a", "b", "c"])
// console.log(letters.has("a"));

// // forEach
// const letters = new Set(["a", "b", "c"]);
// letters.forEach(function (value, index, array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })

const letters = new Set(["a", "b", "c"]);
console.log(letters.values());

for (const x of letters) {
    console.log(x);
}