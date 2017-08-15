var configs = {
    dateFormat: "dd/mm/yy",
    eventServEndPoint:"http://eventfulapi.azurewebsites.net/api/Eventful/",
    geocodeServiceEndPoint : "http://eventfulapi.azurewebsites.net/api/Geocode?address="    
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
    dateCompare: "End date can not be smaller than start date.",
    invalidAddress: "Invalid address."
}

exports.configs = configs;
exports.uiControlIds = uiControlIds;
exports.errorMessages = errorMessages;