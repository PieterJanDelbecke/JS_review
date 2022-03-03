// Codewars

function sum(num, ...args){
    if (args === []){
        return num
    } else {
        args.forEach(item =>{
            num += item
        })
        return num
    }
}

console.log(sum(1,2,3,4,5,6,7))
console.log(sum(1))
console.log(sum(12, 1, 1, 1, 1, 1, 1))