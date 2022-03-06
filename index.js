// Codewars
 function divisableByThree(str){
    str = str.split("").map(num => Number(num)).reduce((a,b)=> a + b)
    return str % 3 === 0 ? true : false
 }

 console.log(divisableByThree('123'))