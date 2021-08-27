function camelize(str) {
  
  let arr = str.split('-');
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {

    let word = arr[i];
    
    if ( i != 0 ) {
      // let upperCaseFirst = word[0].toUpperCase();
      word = word[0].toUpperCase() + (word.slice(1, word.lenght));
      resultArr.push(word);
    } else {
      resultArr.push(word);
    }
  }

  return result = resultArr.join('');
}
