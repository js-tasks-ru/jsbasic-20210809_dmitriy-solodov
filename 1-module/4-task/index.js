function checkSpam(str) {
  
  tempStr = str.toLowerCase();

  testValue_1 = '1xBet';
  testValue_2 = 'XXX';

  console.log(' ------- ' + tempStr + '\n');

  if ( tempStr.includes(testValue_1.toLowerCase()) || tempStr.includes(testValue_2.toLowerCase()) ) {
    return true;
  } else {
    return false;
  }
}
