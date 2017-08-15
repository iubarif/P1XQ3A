
function today(dayInterval){
    var date = new Date();

    if(dayInterval != 0){
        date.setDate(date.getDate() + dayInterval); 
    }

    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = day + "/" + month + "/" + year; 

    return today;
}

function dateFromddMMyyyy(date) {
    var parts = date.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

exports.today = today;
exports.dateFromddMMyyyy = dateFromddMMyyyy;