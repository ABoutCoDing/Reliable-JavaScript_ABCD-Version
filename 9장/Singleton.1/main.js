var simpleCache = require("./simpleCache.js"),
    restaurantsWithinRadiusCache = require("./restaurantsWithinRadiusCache_01.js");


var cache = restaurantsWithinRadiusCache.caches.RestaurantsWithinRadiusCache.getInstance();
cache.setValue("testkey", "testvalue testvalue testvalue");
console.log(cache.getValue("testkey"));