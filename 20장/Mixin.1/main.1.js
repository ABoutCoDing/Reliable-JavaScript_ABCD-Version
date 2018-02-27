
var extend_05 = require("./extend_05.js"),
    idMixin_02 = require("./idMixin_02.js");

var target = {},
    mixin = idMixin_02.mixins.idMixin();

extend_05.extend(target, mixin);

var id = "theId";
target.setId(id);
console.log(target.getId());