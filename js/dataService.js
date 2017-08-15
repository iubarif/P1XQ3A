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
                //debugger;
                //var markup = "<tr><td>" + event.city_name + "</td></tr>"
                
                var img = "";
                if(event.image){
                    var thumb = $.extend(new _entity.Thumb(), event.image.thumb); 
                    img = "<img src=" + thumb.url + " alt= " + event.title +" height=" + thumb.height + " width=" + thumb.width +">"
                }

                var markup = "<tr><td>" + img + "</td></tr>" 
                $("table tbody").append(markup);
            });
        },
        data: searchObject
    });
}

exports.testData = testData;
exports.getEvents = getEvents;