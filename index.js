// CODEWARS

function evaporator(content, evap_per_day, threshold){
    let total = 0
    threshold = (content/100)*threshold
    while (content >= threshold){
        content -= content * (evap_per_day/100)
        total++
    }
    return total
}

console.log(evaporator(10,10,10))