function ucFirst(str) {

  if (str != '') {
  
    let result = str[0].toUpperCase() + str.substr(1, str.length);
    return result;
  } else {
    return str;
  }

}
