var Aop = require("./Aop.js"),
    ReliableJavaScript = require("./contractRegistry.js");

var registry,
    isArray = 'isArray',
    ary = [1, 2, 3];

var funcName = 'func',
    funcObj = {};
    
funcObj[funcName] = function() {
    return [];
};

var notAnArray = 'abc';
registry = ReliableJavaScript.contractRegistry();
registry.define(isArray, Array.isArray);
// registry.assert(isArray, notAnArray);
// registry.attachReturnValidator(12345, funcObj, isArray);


