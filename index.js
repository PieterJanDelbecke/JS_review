//Match() with a regular expression

const paragraph = 'The quick A brown 1 3 7 & % $ 4'
const regex = /\S/g
const found = paragraph.match(regex)

console.log(found)