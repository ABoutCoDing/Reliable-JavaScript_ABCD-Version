var Conference = Conference || {};
var redicap = require('./redicabTransportCompany'),
    yellowcap = require('./yellowcabTransportCompany'),
    http = require('./httpService.js');

Conference.transportCompanyFactory = function() {
  'use strict';

  return {
    create: function create(transportDetails) {
      // transportDetails를 보고
      // 어떤 운송회사 모듈을 생성/반환해야 할지 결정한다
      // 상황에 따라 반환객체(운송회사)가 달라짐
      if ( transportDetails.hasOwnProperty("company")) {
        if (transportDetails.company === "redi" ) {
          return new redicap.redicabTransportCompany(http.httpService());
        }
        return new yellowcap.redicabTransportCompany(http.httpService());
      }
    }
  };
};

module.exports = Conference;