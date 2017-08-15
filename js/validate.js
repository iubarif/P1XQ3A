var _config = require('./config.js');
var _entity = require('./entries.js');
var _dataSrv = require('./dataService.js');


var validationMethods = {
    CompareDate: "CompareDate",
    AddressValidation: "AddressValidation"
}

var validationRules = {
    address: {
        required: true,
        minlength: 4,
        maxlength: 250
        //AddressValidation:true
    },
    radius: {
        required: true,
        number: true,
        range: [0.1, 200]
    },
    StartDate: {
        required: true,
    },
    EndDate: {
        required: true,
        CompareDate: true
    }
}

function highlight(element, errorClass) {
    $(element).closest('.form-group').addClass('has-error');
}

function unhighlight(element, errorClass) {
    $(element).closest('.form-group').removeClass('has-error');
}

function formSubmit(event){        
    var srcObj = new _entity.Searchobject();
    
    srcObj.address = $(_config.uiControlIds.address).val();
    srcObj.radius = $(_config.uiControlIds.address).val();
    srcObj.stDate = $(_config.uiControlIds.stdate).val();
    srcObj.endDate = $(_config.uiControlIds.enddate).val();
    srcObj.category = $(_config.uiControlIds.category).val();

    _dataSrv.getEvents(srcObj);
        
    event.preventDefault();
}

exports.validationRules = validationRules;
exports.formSubmit = formSubmit;
exports.highlight = highlight;
exports.unhighlight = unhighlight;
