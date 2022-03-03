function squareDigits(num){
    let newNum = num.toString().split('')
    let arr = newNum.map(item =>{
        return Math.pow(parseInt(item),2)
    })
    return parseInt(arr.join(''))
}

console.log(squareDigits(3212))
console.log(squareDigits(2112))
console.log(squareDigits(0))