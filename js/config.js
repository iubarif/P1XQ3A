var configs = {
    dateFormat: "dd/mm/yy",
    serviceEndPoint:""    
}

var uiControlIds = {
    address: "#address",
    radius: "#radius",
    stdate: "#StartDate",
    enddate: "#EndDate",
    category: "#Categories",
    form: "#searchForm"
}

var errorMessages = {
    dateCompare: "The end date can not be smaller than start date.",
    invalidAddress: "Invalid address."
}

exports.configs = configs;
exports.uiControlIds = uiControlIds;
exports.errorMessages = errorMessages;