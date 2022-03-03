// OBJECTS AND PROTOTYPES

// OBJECT

let student = {
    name:"michelle",
    age:20,
    address: {
        street: '123 apha street',
        state: "NSW",
        city: "sydney"
    }
}

console.log("age: ", student.age)
console.log("city: ", student.address.city)

student.address.city = "Melbourne"
console.log("student: ", student)