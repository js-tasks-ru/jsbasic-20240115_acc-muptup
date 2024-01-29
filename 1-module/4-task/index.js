function checkSpam(str) {
  const lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.includes('1xbet') || lowerCaseStr.includes('xxx');
}

console.log(checkSpam('1XbeT now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
