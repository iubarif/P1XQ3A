var _config = require('./config.js');
var _util = require('./util.js');
var _dataSrv = require('./dataService.js');
var _entity = require('./entries.js');
var _validate = require('./validate.js');
var _render = require('./render.js');

var pagePayload = new _entity.PagePayload();

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
        //showOn: "button"
    });

    // // For testing remove later
    // _dataSrv.getEvents(_dataSrv.testData);
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
    
    $(_config.uiControlIds.loader).html("Loading......");
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
    }).done(function(){
        $(_config.uiControlIds.loader).html("");        
    });

    return isSuccess;

}, _config.errorMessages.invalidAddress);

$.validator.addMethod("DateFormatCheck", function(value, element) {          
    
    return /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(value)
    
  }, _config.errorMessages.dateformat);    


// Form validation rule
$(_config.uiControlIds.form).validate({
    rules: _validate.validationRules,    
    highlight: _validate.highlight,    
    unhighlight: _validate.unhighlight,
    submitHandler: function() {
        _render.disableSubmit(true);
        $(_config.uiControlIds.searchTable).empty();         
        $(_config.uiControlIds.loader).html("<img src='styles\\Reload.gif' alt='Loading .. ' />");
        $(_config.uiControlIds.loader).addClass("eventful-Loader");

        $.when(_dataSrv.formSubmit()).done(function(data){
            _render.EventAJAXCallSuccess(data);
            
        }).fail(function(xhr, status, error){
            _render.EventAJAXCallFailed(xhr, status, error);
        }).always(function(){
            _render.disableSubmit(false);
            $(_config.uiControlIds.loader).html("");
            $(_config.uiControlIds.loader).removeClass("eventful-Loader");
        });
    }         
});

