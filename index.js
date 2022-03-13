// fizbuzz

for (let i = 0; i <= 100 ; i++){
    let three = ""
    let five = ""
    if (i % 3 === 0) {
        three = "Fizz"
    }
    if (i % 5 === 0){
        five = "Buzz"
    }
    if (three || five){
        console.log(`${i}: `, three + five)
    }
}