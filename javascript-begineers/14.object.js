function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye
}

const myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather);