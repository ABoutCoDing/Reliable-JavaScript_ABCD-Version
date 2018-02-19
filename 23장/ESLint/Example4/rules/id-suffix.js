"use strict";

module.exports = function(context) {
  return {
      "Identifier": function(node){
          var suffix = node.name.length > 1 ? node.name.slice(-2) : "";
          if (suffix === "id" || suffix === "ID"){
             context.report(node, "Identifier ref should end with 'Id'.");
          }
      }
  };
};