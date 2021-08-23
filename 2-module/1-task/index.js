function sumSalary(salaries) {

  let summResult = 0;

  for ( let key in salaries ) {
    if ( (typeof salaries[key] === ("number" || "bigint")) ) {
      if ( (isNaN(salaries[key])) || (salaries[key] == "Infinity") || (salaries[key] == "-Infinity") ) {
        console.log(salaries[key] + " – специальное числовое значение. Его не плюсуем");
      } else {
        console.log("Плюсуем значение " + salaries[key] + " с типом " +typeof(salaries[key]));
        summResult += salaries[key];
      }
    }
  }

  if (summResult != 0) {
    return summResult;
  } else {
      return 0;
    }
    
}
