function getMinMax(str) {

  let arr = str.split(' ');
  let min = 0;
  let max = 0;

  for ( let i = 0; i < arr.length; i++ ) {
    if (Number(arr[i])) {
      if ( parseFloat(arr[i]) > parseFloat(max) ) {
        max = arr[i];
      }
      if ( parseFloat(arr[i]) < parseFloat(min) ) {
        min = arr[i];
      }
    }
  }

  let result = {
    min: parseFloat(min),
    max: parseFloat(max)
  }

  return result;
}