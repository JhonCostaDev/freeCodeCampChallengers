
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) return 0;

  return sum(arr, n - 1) + arr[n - 1];
  // Only change code above this line
}

const a = [2, 3, 4, 5];
function sumIte(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++){
    sum += arr[i];
  }
  return sum;
}

console.log(sum(a, 1))