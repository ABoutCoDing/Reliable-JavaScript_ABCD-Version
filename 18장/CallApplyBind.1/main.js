var forEach = require("./forEach_04.js");

var thisObj = {},
helper = {
  expectThisToBeThisObj : function(val) {
      console.log('val ' + val);
  }
};

[1, 2, 3].forEach(helper.expectThisToBeThisObj, thisObj);