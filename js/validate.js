var _config = require('./config.js');
var _entity = require('./entries.js');
var _dataSrv = require('./dataService.js');


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
    $(_config.uiControlIds.submitButton).prop('disabled', true);
}

function unhighlight(element, errorClass) {
    $(element).closest('.form-group').removeClass('has-error');
    $(_config.uiControlIds.submitButton).prop('disabled', false);
}

function formSubmit(){        
    var srcObj = new _entity.Searchobject();
    
    srcObj.address = $(_config.uiControlIds.address).val();
    srcObj.radius = $(_config.uiControlIds.radius).val();
    srcObj.dateStart = $(_config.uiControlIds.stdate).val();
    srcObj.dateEnd = $(_config.uiControlIds.enddate).val();
    srcObj.category = $(_config.uiControlIds.category).val();
    srcObj.lat = $(_config.uiControlIds.lat).val();
    srcObj.lng = $(_config.uiControlIds.lng).val();

    // srcObj.page_number = 1;
    // srcObj.page_size = 250;
        
    _dataSrv.getEvents(srcObj);        
}

exports.validationRules = validationRules;
exports.formSubmit = formSubmit;
exports.highlight = highlight;
exports.unhighlight = unhighlight;
