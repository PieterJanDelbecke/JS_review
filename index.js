const arrPlus = [
    { a: "one", b: "two", c: false },
    { a: "three", b: "four", c: true },
    { a: "five", b: "six", c: true },
    { a: "seven", b: "eight", c: false }
];

let arr=[]
arrPlus.forEach(obj => {
    if (obj.c === true){
        for (const [key,value] of Object.entries(obj.a)){
            arr.push(value)
        }
    }
})

console.log(arr)