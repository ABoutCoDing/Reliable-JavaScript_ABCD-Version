var ReliableJavaScript = require("./contractRegistry.js");

var registry,
    isArray = 'isArray',
    ary = [1, 2, 3];

var funcName = 'func',
    funcObj = {};
    
funcObj[funcName] = function() {
    return [];
};

var notAnArray = 'abc';
registry = new ReliableJavaScript.ContractRegistry();

var contracts = [
    {name: 'abc', evaluator: function() {return true;}},
    {name: 'abc', evaluator: function() {return false;}},
];

registry.defineMultiple(contracts);
registry.defineMultiple([]);

registry.define(isArray, Array.isArray);
registry.fulfills(isArray, 'not an array');

var notAnArray = 'abc';
// registry.assert(isArray, notAnArray);