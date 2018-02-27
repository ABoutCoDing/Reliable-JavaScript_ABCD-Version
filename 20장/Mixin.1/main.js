
var addId_02 = require("./addId_02.js");

var target = {};
addId_02.mixins.addId.call(target);
var id = "theId";
target.setId(id);
console.log(target.getId());