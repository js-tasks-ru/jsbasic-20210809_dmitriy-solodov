
function factorial(n) {

  let result = n;
  
  if (n != 0) {
    for (let i = n-1; i >= 1; i--) {
      result *= i;
    }
  } else {
    return 1;
  }

return result;

}
