// Object constructors

function Person(name, age){
    this.name = name
    this.age = age
    // this.shout = function(){
    //     return `My name is ${this.name} and I'm ${age} years`
    // }
}
Person.prototype.shout = function(){
    return`my name is ${this.name} and I'm ${this.age}`
}
Person.prototype.role = "student"
let person1 = new Person("Pete", 40)

console.log(person1)
console.log(person1.shout())
console.log(person1.role)