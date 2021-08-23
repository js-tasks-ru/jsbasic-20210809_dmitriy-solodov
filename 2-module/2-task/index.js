function isEmpty(obj) {
  



  for (const key in obj) {

    return false;
  }
  
  return true;



//   console.log(obj);

//   let key = null; 

//   if (!(key in obj)) {
//     console.log("--- " + (key in obj));
//     console.log("У объекта " + obj + " НЕТ свойств. \nobj[key] = " + obj[key]);
//     return true;
//   } 

//   if ((key in obj)) {
//     console.log("--- " + (key in obj));
//     console.log("У объекта " + obj + " ЕСТЬ свойства. \nobj[key] = " + obj[key]);
//     return false;
//   } 

}
