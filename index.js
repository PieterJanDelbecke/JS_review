function XO(str){
    let arr = str.split("")
    let x = 0, y = 0, num =0
    arr = arr.map((e) => {
       e = e.toLowerCase()
       if (e === 'x'){
        num++
        x++
       } else if (e === 'o'){
           num++
           y++
       }
    })
    if (num === 0){
        return true
    } else if (x === y){
        return true
    } else {
        return false
    }
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO("xxxm"))
console.log(XO("zpzpzpp"))