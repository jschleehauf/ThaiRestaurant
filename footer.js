// get the current date, in mm/dd/yyyy format and apply to the "currentDate" id in the footer
function currentDate() 
{
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear(); 
    var dateString = month + "/" + day + "/" + year;
    document.getElementById("currentDate").textContent = dateString;
}

  