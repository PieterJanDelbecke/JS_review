//VARIABLE ARGUMENTS

// function myArgs(){
//     console.log(arguments)
// }
// myArgs(1,2,3,4)

function myOtherArgs (x,y, ...args){
    console.log (x,y,args)
}

myOtherArgs (11,22,33,44,55,66)