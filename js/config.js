var configs = {
    dateFormat: "dd/mm/yy",
    eventServEndPoint:"http://eventfulapi.azurewebsites.net/api/Eventful/",
    geocodeServiceEndPoint : "http://eventfulapi.azurewebsites.net/api/Geocode?address="    
}

var uiControlIds = {
    address: "#address",
    radius: "#radius",
    stdate: "#StartDate",
    enddate: "#EndDate",
    category: "#Categories",
    form: "#searchForm",
    searchResult: "#searchResult"
}

var errorMessages = {
    dateCompare: "End date can not be smaller than start date.",
    invalidAddress: "Invalid address."
}

var rowTemplate = `    <div class="event">
<div class="col-sm-2">
    <img src={{image}} class="img-rounded" alt="" width="100" height="100">
</div>
<div class="col-sm-7">
    <div class='event-title'><a href='{{url}}'>{{title}}}</a></div>
    <div class='event-address'><a href='{{venue_url}}'>{{venue_name}}</a></div>
    <div class='event-desc'>
        {{description}}
    </div>
</div>
<div class="col-sm-3">
    <div class="event-date">
        <div class="date">
            <span class="day">30</span>
            <span class="month">Jun</span>
            <span class="year">2009</span>
        </div>    
    </div>
</div>
</div>`


exports.configs = configs;
exports.uiControlIds = uiControlIds;
exports.errorMessages = errorMessages;
exports.rowTemplate = rowTemplate;