function ucFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : str;
}

console.log(ucFirst('вася'));
console.log(ucFirst('в'));
console.log(ucFirst(''));
