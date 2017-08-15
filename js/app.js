var _config = require('./config.js');
var _util = require('./util.js');

// Set datecControl value
$(document).ready(function() {
    $(_config.uiControlIds.stdate).attr("value", _util.today(0));
    $(_config.uiControlIds.enddate).attr("value", _util.today(1));
    
    $(_config.uiControlIds.stdate).datepicker({
        dateFormat: _config.configs.dateFormat
        //showOn: "button"                            
    });

    $(_config.uiControlIds.enddate).datepicker({
        dateFormat: _config.configs.dateFormat
    });
}) 