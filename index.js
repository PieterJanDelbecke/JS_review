// Promesis

// setTimeout(() => { console.log("One")}, 1000)
// console.log("two")

// .then
// .catch
// .finally

//has immutable statud => pending / reolved / rejected

// let myFirstPromise = Promise.resolve("My first promise, yay!")
//     myFirstPromise.then((value) => {console.log( value + "!!!")})

// let myFirstRejection = Promise.reject("Oh no, error!")
//     myFirstRejection.catch(reason => console.error(reason))

function squareNumber(number) {
    return new Promise((resolve,reject) => {
        if (typeof number !== "number"){
            reject(new Error("Input must be a number"))
        }
        resolve (number * number)
    })
}

// squareNumber("a")
// .then(squaredNumber => console.log("The squared number is" + squaredNumber))
// .catch(error => console.log(error.message))
// .finally(()=> console.log("The promise has finished"))

// OR

let squaredNumber = squareNumber("a")
squaredNumber
    .then( number => console.log(number))
    .catch(error => console.log("Error: " + error.message))