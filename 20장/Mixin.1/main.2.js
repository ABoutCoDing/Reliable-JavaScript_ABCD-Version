
var extend_05 = require("./extend_05.js"),
    idMixin_02 = require("./idMixin_02.js"),
    attendee_idMixin = require("./attendee_idMixin.js");

var attendee = attendee_idMixin.attendee(firstName, lastName), 
    firstName = 'Tom', 
    lastName = 'Jones';

var checkInNumber = 5555;
attendee.setCheckInNumber(checkInNumber);
console.log(attendee.getCheckInNumber());