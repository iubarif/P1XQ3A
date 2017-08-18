var _config = require('./config.js');
var _entity = require('./entries.js');

var testData = {
    "Radius": 1,
    "DateStart": "16/08/2017",
    "DateEnd": "16/09/2017",
    "Lat": 40.712784,
    "Lng": -74.005941,
    "Category": "books"
}

function getEvents(searchObject) {

    var dfd = new $.Deferred();

    $.ajax({
        url: _config.configs.eventServEndPoint,
        data: searchObject,
        type: 'post',
        dataType: 'json',
        success: dfd.resolve,
        error: dfd.reject
    });

    return dfd.promise();
}

function formSubmit() {

    var srcObj = new _entity.Searchobject();

    srcObj.address = $(_config.uiControlIds.address).val();
    srcObj.radius = $(_config.uiControlIds.radius).val();
    srcObj.dateStart = $(_config.uiControlIds.stdate).val();
    srcObj.dateEnd = $(_config.uiControlIds.enddate).val();
    srcObj.category = $(_config.uiControlIds.category).val();
    srcObj.lat = $(_config.uiControlIds.lat).val();
    srcObj.lng = $(_config.uiControlIds.lng).val();

    // srcObj.page_number = 1; srcObj.page_size = 250;

    return getEvents(srcObj);
}

exports.testData = testData;
exports.getEvents = getEvents;
exports.formSubmit = formSubmit;