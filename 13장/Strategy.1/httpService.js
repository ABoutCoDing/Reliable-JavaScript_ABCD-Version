var Conference = Conference || {};

Conference.httpService = function() {
  'use strict';
  var confirmation = {};
  return {
    post : function post(url, data) {
      // data를 url로 전송한 뒤, 처리가 완료되면 귀결되는
      // 프라미스를 반환한다
      return new Promise(function(resolve, reject) {
        confirmation.confirmationCode = "ABC-123-XYZ";
        resolve(confirmation);
      });
    }
  };
};

module.exports = Conference;