var _config = require('./config.js');

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

            //$(_config.uiControlIds.searchResult).append("<table class='myTab'>");

            
            $.each(ev, function (i, item) {
                var markup = "<tr><td>" + ev[i].city_name + "</td></tr>"
                // $(_config.uiControlIds.searchResult).append("<tr>");
                // $(_config.uiControlIds.searchResult).append("<td>");
                // $(_config.uiControlIds.searchResult).append(ev[i].description.substring(0, 25));
                // $(_config.uiControlIds.searchResult).append("</td>");
                // $(_config.uiControlIds.searchResult).append("</tr>");

                $("table tbody").append(markup);
            });
            //$(_config.uiControlIds.searchResult).append("</table>");
        },
        data: searchObject
    });
}

exports.testData = testData;
exports.getEvents = getEvents;