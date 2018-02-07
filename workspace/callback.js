var attendees = Conference.attendeeCollection();

attendees.iterate(function(attendee) {
    attendee.checkIn();
});