function sequence(x){
    arr = []
    for (let i = 0; i < x; i++){
        arr= [...arr, i+1]
    }
    return arr.sort()
}
console.log(sequence(16))