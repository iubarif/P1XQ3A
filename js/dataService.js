var _config = require('./config.js');
var _entity = require('./entries.js');

var testData = {
    "Address": "1016 Grob Court, Victoria, BC",
    "Radius": 1,
    "DateStart": "2017-01-01T00:00:00",
    "DateEnd": "2017-01-02T00:00:00",
    "Lat": 40.712784,
    "Lng": -74.005941,
    "Category": "books"
}

function getEvents(searchObject) {
    $.ajax({
        url: _config.configs.eventServEndPoint,
        type: 'post',
        dataType: 'json',
        success: function (data) {

            var ev = data.events.event;

            $.each(ev, function (i, item) {

                var event = $.extend(new _entity.Event(), ev[i]);
                var template = _config.rowTemplate;
                var day;
                var month;
                var year;

                var imgUrl = _config.configs.notFoundPicture;

                if (!$.isEmptyObject(event.image)) {
                    if (!$.isEmptyObject(event.image.thumb)) {
                        if (!$.isEmptyObject(event.image.thumb.url)) {
                            imgUrl = event.image.thumb.url;
                        }
                    }
                }

                if (!$.isEmptyObject(event.start_time)) {
                    var stratDate = new Date(event.start_time);

                    day = stratDate.getDate();
                    month = _config.monthNames[stratDate.getMonth()];
                    year = stratDate.getFullYear();

                    if (month < 10) month = "0" + month;
                    if (day < 10) day = "0" + day;
                }

                if (!$.isEmptyObject(event.description)) {
                    event.description = event.description.length > 200 ? event.description.substring(0, 200) + "..." : event.description;
                }
                else{
                    event.description = "";
                }
                event.image = imgUrl;

                template = template.replace('{{image}}', event.image);
                template = template.replace('{{title}}', event.title);
                template = template.replace('{{url}}', event.url);
                template = template.replace('{{venue_name}}', event.venue_name);
                template = template.replace('{{venue_url}}', event.venue_url);
                template = template.replace('{{description}}', event.description);
                template = template.replace('{{day}}', day);
                template = template.replace('{{month}}', month);
                template = template.replace('{{year}}', year);

                var markup = '<tr><td>{{template}}</td></tr>';
                $("table tbody").append(markup.replace('{{template}}', template));
            });
        },
        data: searchObject
    });
}


function validateAddress(address) {
    //debugger;

    $.ajax({
        url: _config.configs.geocodeServiceEndPoint + address,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            var langLat = "Lon : " + data.lng + " , Lat : " + data.lat;

            alert(langLat);

            return true;
        },
        error: function () {
            return false;
        }

    });

    // var isSuccess = false;

    // $.ajax({
    //     url: _config.configs.geocodeServiceEndPoint + value,
    //     type: 'get',
    //     dataType: 'json',
    //     async: false,
    //     success: function (data) {
    //         //var langLat = "Lon : " + data.lng + " , Lat : " + data.lat;

    //         //alert(langLat);
    //         if (data) {
    //             isSuccess = true;
    //         }
    //     },

    // });

    // return isSuccess;
}


// function validateAddress(address) {

//     $.when(
//         $.ajax({
//             async: false,
//             url: _config.configs.geocodeServiceEndPoint + address,
//             type: 'get',
//             dataType: 'json',                        
//         })
//     ).done(function(data){        
//         return true;
//     }).fail(function(){
//         return false;
//     });
// }

// var dataOperationOptions = {
//     method : {},
//     url : "",
//     type : "get",
//     dataType : 'json',
//     data : {},
//     success : {}, 
//     fail : {},
//     inProgress ={}    
// },

// function dataOperation(method, dataOperationOptions) {
//     dataOperationOptions.inProgress();

//     $.when(
//         method()
//     ).done(function(data){
//         dataOperationOptions.success(data);
//     })    
//     .fail(function(){})
//     .progress(function(){
//         dataOperationOptions.inProgress();
//     })
// }

exports.testData = testData;
exports.getEvents = getEvents;
exports.validateAddress = validateAddress;
//exports.dataOperationOptions = dataOperationOptions;
//exports.dataOperation = dataOperation;