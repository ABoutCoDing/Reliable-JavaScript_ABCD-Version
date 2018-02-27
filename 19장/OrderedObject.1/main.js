var utilities = require("./utilities.js"),
    OrderedObject_02 = require("./OrderedObject_02.js");

var orderedObject = new OrderedObject_02.OrderedObject();
var result = 0;

function processKey(key, value) {
    if (typeof value !== 'function' ) {
        result = result * 100 + value;
    }
}

var borrower = { c:11, a:22, b:33 };
utilities.borrow(borrower, orderedObject, 'forEachKey');
borrower.forEachKey(processKey);    // this : borrower

console.log(orderedObject);
console.log(borrower);
console.log(result);