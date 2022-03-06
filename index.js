function sumOfMinimums(arr){
    let sum = 0
    arr.forEach(e => {
        let min = Math.min(...e)
        sum += min
    })
    return sum
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))