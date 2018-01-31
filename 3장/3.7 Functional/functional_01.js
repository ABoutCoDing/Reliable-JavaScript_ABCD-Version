﻿var AnimalKingdom = AnimalKingdom || {};

AnimalKingdom.marsupial = function(name, nocturnal) {

  var instanceName = name,
      instanceIsNocturnal = nocturnal;

  return {
    getName: function() {
      return instanceName;
    },
    getIsNocturnal: function() {
      return instanceIsNocturnal;
    }
  };
};

AnimalKingdom.kangaroo = function(name) {
  var baseMarsupial = AnimalKingdom.marsupial(name, false);

  baseMarsupial.hop = function() {
    return baseMarsupial.getName() + '가 껑충 뛰었어요';
  };

  return baseMarsupial;
};

var jester = AnimalKingdom.kangaroo('제스터');
console.log(jester.getName());         // '제스터'
console.log(jester.getIsNocturnal());  // false
console.log(jester.hop());             // '제스터가 껑충 뛰었어요!'