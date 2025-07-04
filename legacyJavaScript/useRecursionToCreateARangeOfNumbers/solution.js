function rangeOfNumbers(startNum, endNum) {
    if(endNum < startNum || startNum < 1 ||startNum < endNum ) {
        return [];
    } else {
        const countArray = rangeOfNumbers()
    }
};



//DEBOUNCE
// This is a solution for an task on my fullstack development course

function countDown(n){
  if(n < 1) {
    return [];
  } else {
    const countArray = countDown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countDown(5));