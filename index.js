// Object.keys()

const object1 = { a: 'something', b: 42, c: false }

const keys =  Object.keys(object1)
const values = Object.values(object1)

console.log(keys)
console.log(values)

for (const property in object1){
    console.log(`${property} is ${object1[property]}`)
}

