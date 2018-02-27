var Aop = require("./Aop.js"),
    forEach = require("./forEach_02.js");

var ix,
    obj,
    withNoGoodLength = [
        { a: 1 }, {length: "숫자 아니얌"},
        {length: Infinity}, {length: -1}, {length: 1.5 }
    ];

for (ix=0; ix<withNoGoodLength.length; ++ix) {
    obj = withNoGoodLength[ix];

    // 폴리필을 빌린다.
    obj.forEach = forEach.polyfills.arrayForEach;
}