var _config = require('./config.js');
var _util = require('./util.js');
var _dataSrv = require('./dataService.js');
var _entity = require('./entries.js');
var _validate = require('./validate.js');


$(document).ready(function() {
    
    // Set datecControl value
    $(_config.uiControlIds.stdate).attr("value", _util.today(0));
    $(_config.uiControlIds.enddate).attr("value", _util.today(1));
    
    // Set datecControl date format
    $(_config.uiControlIds.stdate).datepicker({
        dateFormat: _config.configs.dateFormat
        //showOn: "button"                            
    });

    $(_config.uiControlIds.enddate).datepicker({
        dateFormat: _config.configs.dateFormat
    });
}) 

$.validator.addMethod("CompareDate", function (value, element) {
    var stDate = new Date(_util.dateFromddMMyyyy($(_config.uiControlIds.stdate).val()));
    var endDate = new Date(_util.dateFromddMMyyyy(value));

    return endDate > stDate;

}, _config.errorMessages.dateCompare);

$.validator.addMethod("AddressValidation", function (value, element) {

    // Validate against Web Api
    //return false;
    return _dataSrv.validateAddress(value);

}, _config.errorMessages.invalidAddress);

// Form validation rule
$(_config.uiControlIds.form).validate({
    rules: _validate.validationRules,    
    highlight: _validate.highlight,    
    unhighlight: _validate.unhighlight        
});

$(_config.uiControlIds.form).submit(function(form){
    _validate.formSubmit(form);
});

