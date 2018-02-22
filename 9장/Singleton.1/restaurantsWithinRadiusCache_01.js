var simpleCache = require("./simpleCache.js");

var Conference = Conference || {};
Conference.caches = simpleCache.caches || {};

// restaurantApi.getRestaurantsWithinRadius 함수에서
// 캐시로 사용할 simpleCache(싱글톤) 생성
Conference.caches.RestaurantsWithinRadiusCache = (function() {
  "use strict";

  var instance = null;

  return {
    getInstance: function() {
      if (!instance) {
        instance = simpleCache.simpleCache();
      }
      return instance;
    }
  };
})();

module.exports = Conference;