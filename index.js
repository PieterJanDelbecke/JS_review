const obj =  { a: "seven", b: 8, c: false }

const arr= []
for (const property in obj){
    arr.push(obj.property)
}

console.log(arr)