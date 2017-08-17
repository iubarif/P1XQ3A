
var Searchobject = class Searchobject {
    constructor() {
        this.address = "";
        this.lat = "";
        this.lng = "";
        this.radius = "";
        this.dateStart = "";
        this.dateEnd = "";
        this.category = "";
        
        // this.page_number = "";
		// this.page_size = "";		
    }
};


var Event = class event {
    constructor() {
        this.title = "";
        this.url = "";
        this.start_time = "";
        this.stop_time = "";
        this.venue_name = "";
        this.venue_url = "";
        this.description = "";

        this.venue_address = "";
        this.latitude = "";
        this.longitude = "";

        this.image = ""
    }
};

var Thumb = class thumb {
    constructor() {
        this.width = "";
        this.url = "";
        this.height = "";
    }
};

var PagePayload = class thumb {
    constructor() {
        this.page_number = "";
        this.page_size = "";
        this.page_count = "";
    }
};

var EventfulRoot = class EventfulRootObject {
    constructor() {
        this.last_item = "";
        this.total_items = ""
        this.first_item = "";
        this.page_number = "";
        this.page_size = "";
        this.page_items = "";
        this.search_time = "";
        this.page_count = "";
        this.events = "";
    }
}

exports.Searchobject = Searchobject;
exports.EventfulRoot = EventfulRoot;
exports.Event = Event;
exports.Thumb = Thumb;
exports.PagePayload = PagePayload;