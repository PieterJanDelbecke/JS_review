const arr = ["Matt",48, 4510]

console.log(arr[1])
console.log(arr.length)
console.log(arr.includes("Matt"))
console.log(arr.includes(10))

arr.push("end")
console.log(arr)
arr.unshift("start")
console.log(arr)
console.log(arr.pop())
console.log(arr)
console.log(arr.shift())
console.log(arr)


const arr2 = [5 ,10 , 15, 30, 40]
const values = arr.find(element => element > 15)
console.log(values)