function truncate(str, maxlength) {

  if ( str.length > maxlength ) {
    let resultStr = str.substr( 0, maxlength - 1 ) + '…';
    return resultStr;
  } else {
    return str;
  }

}
