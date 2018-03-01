var transportScheduler = require('./transportScheduler_02.js'),
    companyFactory = require('./transportCompanyFactory.js'),
    auditService = require('./transportCompanyAuditService.js');
    
var scheduler 
    = transportScheduler.transportScheduler(
        auditService.transportCompanyAuditService(), 
        companyFactory.transportCompanyFactory());

var transportDetails = {
    company: "redi",
    passengerName: "jamie",
    pickUpTime: "3시"
};

var scheduleTransportation = scheduler.scheduleTransportation(transportDetails);
scheduleTransportation.then(function(confirmation) {
        console.log("confirmation :: " + confirmation);
    },
    function(){}
);

console.log(Conference.transportCompanyAuditService);


