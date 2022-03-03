// function myOtherArgs (a, b, ...args){
//     console.log("a: ",a)
//     console.log("b: ",b)
//     console.log("args: ",args)

// }

// myOtherArgs(10,20,30,40,50)

let a,b, rest
[a,b,...rest]=[10,20,30,40,50]
console.log("a: ",a)
console.log("b: ",b)
console.log("rest: ",rest)