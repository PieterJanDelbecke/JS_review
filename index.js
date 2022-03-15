// Object.entries()

const object1 = { a: 10, b: 42, c: 50 }

const arr = []

for (const [key, value] of Object.entries(object1)){
    if (value > 20 ){
        arr.push ({
            newKey: value
        })
    }
}

console.log(arr)