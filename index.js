function grow(x){
    total = 1
    x.forEach(num => {
        total *= num
    })
    return total
}

console.log(grow([1,2,3]))
console.log(grow([4,1,1,1,4]))
console.log(grow([2,2,2,2,2,2]))