var attendeeProfileService = require("./attendeeProfileService.js"),
    attendeeProfileProxy = require("./attendeeProfileProxy.js");

var proxy = attendeeProfileProxy.attendeeProfileProxy,
    profileService = attendeeProfileService.attendeeProfileService(),
    attendees = [
        { attendeeId: 10, profileViews: "3" },
        { attendeeId: 11, profileViews: "0" },
        { attendeeId: 12 },
        { attendeeId: 13, profileViews: "3" },
        { attendeeId: 14, profileViews: "10"},
        { attendeeId: 15, profileViews: "2" },
        { attendeeId: 16, profileViews: "1" },
      ],
    prefetchLimit = 3;

var proxyInstance = proxy(attendees, profileService, prefetchLimit);
var attendeeId = 13,
    profile = proxyInstance.getProfile(attendeeId);

profile.then(function resolved(attendeeId) {
    console.log(attendeeId);
}, function rejected() {

});