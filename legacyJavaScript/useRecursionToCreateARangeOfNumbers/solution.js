//Solution 1
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};

// Solution 2
function rangeOfNumbersTernary(startNum, endNum){
  return endNum < startNum ? []: rangeOfNumbersTernary(startNum, endNum -1).concat(endNum);
}
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));

console.log(rangeOfNumbersTernary(1, 5));
console.log(rangeOfNumbersTernary(6, 9));
console.log(rangeOfNumbersTernary(4, 4));