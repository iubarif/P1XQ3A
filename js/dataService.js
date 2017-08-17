var _config = require('./config.js');
var _entity = require('./entries.js');
var _util = require('./util.js');

var testData = {    
    "Radius": 1,
    "DateStart": "16/08/2017",
    "DateEnd": "16/09/2017",
    "Lat": 40.712784,
    "Lng": -74.005941,
    "Category": "books"
}

function getEvents(searchObject) {

    $.ajax({
        url: _config.configs.eventServEndPoint,
        data: searchObject,
        type: 'post',
        dataType: 'json',
        success: function (data) {

            var eventRoot;

            if (data != null) {
                eventRoot = $.extend(new _entity.EventfulRoot(), data);

                if (!$.isEmptyObject(eventRoot)) {
                    if (!$.isEmptyObject(eventRoot.events)) {
                        if (!$.isEmptyObject(eventRoot.events.event)) {

                            if (!$.isEmptyObject(eventRoot.total_items)) {
                                var markup = "<tr><th><div class='panel panel-primary panel-heading'>Total Items found : {{total}}</div></th></tr>";
                                $(_config.uiControlIds.searchTable).append(markup.replace("{{total}}", eventRoot.total_items));

                                var ev = eventRoot.events.event;

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
                                    else {
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
                                    $(_config.uiControlIds.searchTable).append(markup.replace('{{template}}', template));
                                });
                            }
                            else{
                                NotFound();                                
                            }
                        }
                        else{
                            NotFound();
                        }
                    }
                    else{
                        NotFound();
                    }
                }
            }
        }
    });
}


function NotFound(){
    var markup = "<tr><th><div class='panel panel-primary'>No item found for this search criteria</div></th></tr>";
    $("table tbody").append(markup);
}

exports.testData = testData;
exports.getEvents = getEvents;
