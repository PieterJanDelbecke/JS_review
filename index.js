function getMiddle(s)
{
    let half = Math.floor(s.length/2)
    let arr = s.split("")
    if (s.length % 2 === 0){
        return arr[half-1].concat(arr[half])
    } else {
        return arr[half]
    }
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("A"))