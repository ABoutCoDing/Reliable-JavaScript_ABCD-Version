// AOP 없는 캐싱 

TravelService = (function(rawWebService) {
    var conferenceAirport = 'B05'
    var maxArrival = new Date(/* 날짜 */)
    var minDeparture = new Date(/* 날짜 */)
   
    var cache = []

    return {
        getSuggestedTicket: function(homeAirport) {
            var ticket = 1
            if (cache[homeAirport]) {
                return cache[homeAirport]
            }

            // ticket = rawWebService.getCheapesRoundTrip (
            //     homeAirport, conferenceAirport, maxArrival, minDeparture
            // )
            cache[homeAirport] = ticket

            return ticket
        }
    }
})

// TravelService().getSuggestedTicket();

