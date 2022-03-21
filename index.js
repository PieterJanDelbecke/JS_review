function capitalize(s) {
  return s
    .split("")
    .map((e, index) => {
      return index % 2 === 0 ? e.toUpperCase() : e;
    })
    .join("");
}

console.log(capitalize("abcdef"));
