// Codewars
 function disemvowel(str){
    regex = /[auio]/gi
    return str.replace(regex, "")
 }

 console.log(disemvowel("This website is for losers LOL!"))