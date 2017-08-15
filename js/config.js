var configs = {
    dateFormat: "dd/mm/yy",
    eventServEndPoint:"http://eventfulapi.azurewebsites.net/api/Eventful/"    
}

var uiControlIds = {
    address: "#address",
    radius: "#radius",
    stdate: "#StartDate",
    enddate: "#EndDate",
    category: "#Categories",
    form: "#searchForm",
    searchResult: "#searchResult"
}

var errorMessages = {
    dateCompare: "The end date can not be smaller than start date.",
    invalidAddress: "Invalid address."
}

exports.configs = configs;
exports.uiControlIds = uiControlIds;
exports.errorMessages = errorMessages;