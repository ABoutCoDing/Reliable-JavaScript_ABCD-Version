// 캐싱 없는 TravleService 모듈

TravelService = (function(rawWebService) {
    var conferenceAirport = 'B05'
    var maxArrival = new Date(/* 날짜 */)
    var minDeparture = new Date(/* 날짜 */)
   
    return {
        getSuggestedTicket: function(homeAirport) {
            return rawWebService.getCheapestRoundTrip (
                homeAirport, conferenceAirport, maxArrival, minDeparture
            )
        }
    }
})