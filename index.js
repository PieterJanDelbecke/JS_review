function sumMix(x){
sum = 0 
x.forEach(item => {
    num = parseInt(item)
    sum += num
})
return sum
}

console.log(sumMix([9,3,'7',3]))
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))