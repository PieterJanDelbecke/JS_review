// Object constructor

function Person (name, age) {
    this.name = name
    this.age = age
    this.awesome = true
}

let instructor = new Person("Pieter-Jan", 25)
console.log(instructor.name)