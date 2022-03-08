// Promise chaining

function generateRandomNumber(limit) {
  console.log("Generating number between 1 - " + limit);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof limit !== "number") {
        reject(new Error("Input must be a number"));
      }
      const randomNumber = Math.floor(Math.random() * limit) + 1;
      resolve(randomNumber);
    }, 1000);
  });
}

function doubleNumber(num){
    return new Promise ((resolve, reject) => {
        if (num < 0){
            reject(new Error("Can't be negative"))
        }
        resolve(num *2)
    })
}

function logIfSmall(num){
    if (num > 15){
        throw new Error("That number is too big")
    } 
    console.log("The doubled number is " + num )
}

generateRandomNumber(8)
    .then(number => {
        console.log("The number is " + number)
        return number
    })
    .then(doubleNumber)
    .then(logIfSmall)
    .catch( error => console.error ("Caught error: " + error.message))