var attendee = require("./attendee.js"),
    attendeeWebApi = require("./attendeeWebApi.js"),
    attendeeNames = require("./attendeeNames.js"),
    attendeeNamesWidget = require("./attendeeNamesWidget.js");

var sandbox = {}; 
sandbox.dom = {};
var attendeeWebApi = attendeeWebApi.attendeeWebApi();
attendeeNames.WidgetTools.attendeeNames(sandbox, attendeeWebApi);
attendeeNamesWidget.Widgets.attendeeNamesWidget(sandbox);

// sandbox.attendeeNames.getAll().then(function resolved(names) {
//     console.log("names : " + names);
// }, function rejected(reason) {
//     console.log("rejected : " + reason);
// });