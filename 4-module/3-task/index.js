function highlight(table) {
  
    let tableRows = table.querySelectorAll('tbody > tr');

    for ( let i = 0; i < tableRows.length; i++ ) {

        let availableCell = tableRows[i].cells[3];
        if ( availableCell.dataset.available === "true" ) {
            availableCell.parentElement.classList.add("available");
        } 
        else if ( availableCell.dataset.available === "false" ) {
            availableCell.parentElement.classList.add("unavailable");
        } 
        else if ( !availableCell.hasAttribute("available") ) {
            tableRows[i].setAttribute("hidden", "true");
        }

        let genderCell = tableRows[i].cells[2];
        if ( genderCell.innerHTML === "m" ) {
            genderCell.parentElement.classList.add("male");
        } 
        else if ( genderCell.innerHTML === "f" ) {
            genderCell.parentElement.classList.add("female");
        } 

        let ageCell = tableRows[i].cells[1];
        if ( ageCell.innerHTML < 18 ) {
            ageCell.parentElement.setAttribute("style", "text-decoration: line-through");
        } 
    }
}