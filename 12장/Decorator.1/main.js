var attendee = require('./attendee'),
    fakeAttendeeWebApi = require('./fakeAttendeeWebApi'),
    attendeeWebApiDecorator = require('./attendeeWebApiDecorator');

var attendeeA = attendee.attendee('제이', '이'),
    attendeeB = attendee.attendee('솔이', '이');

attendee.attendee();
var decoratedWebApi 
    = attendeeWebApiDecorator.attendeeWebApiDecorator(fakeAttendeeWebApi.fakeAttendeeWebApi());

decoratedWebApi.post(attendeeA).then(function(attendee) {
    console.log(attendee.getFullName());
});