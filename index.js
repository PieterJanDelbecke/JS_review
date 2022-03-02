//nested functions and closure

// => allows us to declare a function within a function

function parentFunc(a){
    let b=1
    function nestedFunction(a,b){
        return a+b
    }
    return nestedFunction(a,b)
}
let answer = parentFunc(10)
console.log(answer)