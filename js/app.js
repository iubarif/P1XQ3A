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
    
    //return _dataSrv.validateAddress(value);
    var isSuccess = false;
    
    //debugger;
    var lng,lat;
    $(_config.uiControlIds.lng).val('');
    $(_config.uiControlIds.lat).val('');
    
    $.ajax({
        url: _config.configs.geocodeServiceEndPoint + value,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function (data) {            
            $(_config.uiControlIds.lng).val(data.lng);
            $(_config.uiControlIds.lat).val(data.lat);

            isSuccess =  true;
        },        
    });

    return isSuccess;

}, _config.errorMessages.invalidAddress);

// Form validation rule
$(_config.uiControlIds.form).validate({
    rules: _validate.validationRules,    
    highlight: _validate.highlight,    
    unhighlight: _validate.unhighlight, 
    submitHandler: function() {        
        $("table tbody").empty(); 
        
        //$('#searchResultHeader').style.display = none;       
        _validate.formSubmit();
    }       
});

