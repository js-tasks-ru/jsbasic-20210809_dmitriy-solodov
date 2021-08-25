function filterRange(arr, a, b) {
  
  resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if ( (arr[i] >= a) && (arr[i] <= b) ) {
      resultArray.push(arr[i]);
    }
  }

  return resultArray;
}