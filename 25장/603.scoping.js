var Conference = Conference || {};
Conference.simpleCache = function(){
    var privateCache = {};
    function getCacheKey(key){
        return JSON.stringify(key);
    }
    return {
        // Returns true if key has an entry in the cache, false if
        // it does not.
        hasKey: function(key){
            return privateCache.hasOwnProperty(getCacheKey(key));
        },
        // Stores value in the cache associated with key
        setValue: function(key, value){
            privateCache[getCacheKey(key)] = value;
        },
        // Returns the cached value for key, or undefined
        // if a value for key has not been cached
        getValue: function(key){
            return privateCache[getCacheKey(key)];
        }
    };
};