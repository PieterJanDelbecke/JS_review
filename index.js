// Codewars
function nbYear(p0, percent, aug, p){
    let inhabitants = p0
    count = 0
    while (inhabitants <= p) {
        inhabitants = inhabitants + ((inhabitants * percent) / 100) + aug
        count++
    }
    return count
}

console.log(nbYear(1500, 5,100,5000))
console.log(nbYear(1500000, 2.5,10000,2000000))