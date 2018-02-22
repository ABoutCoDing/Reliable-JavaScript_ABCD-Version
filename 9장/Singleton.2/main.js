var Aop = require("./Aop"),
    simpleCache = require("./simpleCache.js"),
    Aspects = require("./returnValueCache_02.js");

var args = [{key:"value"}, "someValue"],
    testValue;

function createATestObject() {
    var obj = {
        testFunction : function(arg) {
            return "testValue";
        }
    };
    return obj;
}

var sharedCache = simpleCache.simpleCache(),
    object1 = createATestObject(),
    object2 = createATestObject();

Aop.around('testFunction',
    new Aspects.returnValueCache(sharedCache).advice,
    object1);

Aop.around('testFunction',
    new Aspects.returnValueCache(sharedCache).advice,
    object2);

console.log(object1.testFunction(args));
console.log(object2.testFunction(args));