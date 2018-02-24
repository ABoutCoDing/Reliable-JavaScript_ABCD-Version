var outgoingLinkClickRecorder = require("./outgoingLinkClickRecorder.js"),
    outgoingLinkClickHandler = require("./outgoingLinkClickHandler_02.js");

var clickRecorder = outgoingLinkClickRecorder.outgoingLinkClickRecorder(),
    clickHandler = outgoingLinkClickHandler.outgoingLinkClickHandler(clickRecorder);

clickHandler.handleClick();