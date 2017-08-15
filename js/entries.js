
var Searchobject = class Searchobject {
    constructor() {
        this.address = "";
        this.lat = "";
        this.lng ="";
        this.radius=  "";
        this.dateStart =  "";
        this.dateEnd =  "";
        this.category =  "";
    }
  };


  var Event = class event {
    constructor() {
        this.title = "";
        this.url = "";
        this.start_time ="";
        this.stop_time=  "";
        this.venue_name =  "";
        this.venue_url =  "";
        this.description  =  "";

        this.venue_address ="";
        this.latitude=  "";
        this.longitude =  "";
    }
  };

  exports.Searchobject = Searchobject;
  exports.Event = Event;