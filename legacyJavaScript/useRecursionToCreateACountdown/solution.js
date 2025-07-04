function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}

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