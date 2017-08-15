var _config = require('./config.js');
var _util = require('./util.js');
var _dataSrv = require('./dataService.js');
var _entity = require('./entries.js');


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

// Form Submit event
// $(_config.uiControlIds.form).submit(function (event) {
//     //var x = $(_config.uiControlIds.form).serialize();
//     //alert(x);

//     _searchObj.address = 

//     _dataSrv.getEvents(_dataSrv.testData);

//     event.preventDefault();
// });

$.validator.addMethod("CompareDate", function (value, element) {
    var stDate = new Date(_util.dateFromddMMyyyy($(_config.uiControlIds.stdate).val()));
    var endDate = new Date(_util.dateFromddMMyyyy(value));

    return endDate > stDate;

}, _config.errorMessages.dateCompare);

$.validator.addMethod("AddressValidation", function (value, element) {

    // Validate against Web Api
    return false;

}, _config.errorMessages.dateCompare);

// Form validation rule
$(_config.uiControlIds.form).validate({
    rules: {
        address: {
            required: true,
            minlength: 4,
            maxlength: 250,
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
    },
    highlight: function (element, errorClass) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function (element, errorClass) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    submitHandler: function (form) {
        //alert('AJAX Called...');

        _entity.Searchobject.address = $(_config.uiControlIds.address).val();
        _entity.Searchobject.radius = $(_config.uiControlIds.address).val();
        _entity.Searchobject.stDate = $(_config.uiControlIds.stdate).val();
        _entity.Searchobject.endDate = $(_config.uiControlIds.enddate).val();
        _entity.Searchobject.category = $(_config.uiControlIds.category).val();        
        
        _dataSrv.getEvents(_dataSrv.testData);

        event.preventDefault();
    }

    // messages: {
    // 	address: "Please enter Address",
    // 	radius: "Please enter radius",				
    // }
});

