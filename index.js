function getCount(str) {
  let regex = /[a,e,i,o,u]/g;
  let found = str.match(regex);
  return !found ? 0 : found.length;
}

console.log(getCount("abracadabra"));
console.log(getCount("my pyx"));
