// Codewars

function DNAstrand(dna){
    newArr =dna.split("").map(letter =>{
        switch(letter){
        case "A":
            return "T"
        case "T":
            return "A"
        case "G":
            return "C"
        case "C":
            return "G"
        default:
            return " "
        }
    })
    return newArr.join("")
}

console.log(DNAstrand("ATTGC"))