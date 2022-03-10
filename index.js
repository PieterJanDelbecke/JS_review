// CODEWARS

String.prototype.toJadenCase = function (){
    return this.split(" ").map( e => {
        e = e.split("")
        return [e[0].toUpperCase(), ...e.splice(1, e.length)].join("")
    }).join(" ")
}

console.log(jadenCase("How can mirrors be real if our eyes aren't real"))