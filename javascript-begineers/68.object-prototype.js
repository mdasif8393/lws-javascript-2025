function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

Person.prototype.nationality = "Bangladesh"
Person.prototype.fullName = function () {
    return this.firstName + this.lastName
}
console.dir(myFather);
console.log(myFather.nationality);
console.log(myFather.fullName());