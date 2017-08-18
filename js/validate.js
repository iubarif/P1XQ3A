var _entity = require('./entries.js');
var _dataSrv = require('./dataService.js');
var _render = require('./render.js');

var validationMethods = {
    CompareDate: "CompareDate",
    AddressValidation: "AddressValidation",
    DateFormat: "DateFormatCheck"
}

var validationRules = {
    address: {
        required: true,
        minlength: 15,
        maxlength: 250,
        AddressValidation:true
    },
    radius: {
        required: false,
        //number: true,
        digits:true,
        range: [1, 300]
    },
    StartDate: {
        required: true,
        DateFormatCheck: true        
    },
    EndDate: {
        required: true,
        CompareDate: true
    }
}

function highlight(element, errorClass) {
    $(element).closest('.form-group').addClass('has-error');    
    _render.disableSubmit(true);
}

function unhighlight(element, errorClass) {
    $(element).closest('.form-group').removeClass('has-error');    
    _render.disableSubmit(false);
}


exports.validationRules = validationRules;
exports.highlight = highlight;
exports.unhighlight = unhighlight;
