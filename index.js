function XO(str){
 str = str.toLowerCase().split('')
 return str.filter(e => e === 'x').length === str.filter( e => e === 'o').length
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO("xxxm"))
console.log(XO("zpzpzpp"))