const object1 = '{"name":"Pete", "age":30, "awesome":true}'
const object2 = {
    firstName: "Pieter-Jan",
    lastName: "Delbecke",
    city: "Sydney",
    age: 30,
    carr: null
}

const newObject1 = JSON.parse(object1)
const newObject2 = JSON.stringify(object2)

console.log(newObject1)
console.log(newObject2)

// const json = '{"result":true, "count":42,"name":"pete"}';
// const obj = JSON.parse(json);

// console.log(obj)
// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// // expected output: true