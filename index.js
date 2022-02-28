// Looping over Arrays  => iterations

// For each

// let numbers = [2, 3, 4]

// numbers.forEach (number => {
//     let myNumber = Math.pow(number, 2)
//     console.log(`the exponent of ${number} is ${myNumber}`)
// })

let numbers = [2,3,4,5]

let newNumbers = numbers.map (number => {
    return Math.pow(number, 2)
})

console.log(newNumbers)