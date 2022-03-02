// CLOSURES

function makeAdder(a){
    return function(b){
        return a + b
    }
}
let addFive = makeAdder(5)
let addTen = makeAdder(10)

console.log(addFive(6))
console.log(addTen(13))