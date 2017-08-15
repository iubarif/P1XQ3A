var _config = require('./config.js');
var _util = require('./util.js');


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
//     var x = $(_config.uiControlIds.form).serialize();
//     alert(x);

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

        // $('#dialog').dialog({
        //     modal: true,
        //     title: "Event List",
        //     width: 1000,
        //     height: 700
        // });
    }

    // messages: {
    // 	address: "Please enter Address",
    // 	radius: "Please enter radius",				
    // }
});

