function sumArray(array) {
    if (!array) {
        array = []
    }
    let sortArray = array.sort(function(a, b) {
      return a - b;
    });
    sortArray.pop()
    sortArray.shift()
    let sum = 0
    for (i=0; i < sortArray.length; i++ ){
        sum += sortArray[i]
    }
    return sum
}


console.log(sumArray(null))
console.log(sumArray([]))
console.log(sumArray([3]))
console.log(sumArray([3,5]))
console.log(sumArray([6,2,1,8,10]))
console.log(sumArray([ 0, 1, 6, 10, 10 ]))
console.log(sumArray([ -6, -20, -1, -10, -12 ]))