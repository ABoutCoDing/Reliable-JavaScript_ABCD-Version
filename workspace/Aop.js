Aop = {
  around: function(fnName, advice, fnObj) {
    var originalFn = fnObj[fnName];
    fnObj[fnName] = function () {
      return advice.call(this, {fn:originalFn, args:arguments});  // function(targetInfo) {
    };
  },

  next: function(targetInfo) {
    var ret = targetInfo.fn.apply(this, targetInfo.args);
    return ret;
  }
};

// advice 를 먼저 실행  
// targetObj.targetFn() 실행 결과를 리턴한다.

Aop.before = function(fnName, advice, fnObj) {
  Aop.around(fnName,
    function(targetInfo) {
      advice.apply(this, targetInfo.args);
      return Aop.next(targetInfo);
    },
    fnObj);
};

// advice 를 실행하고 
// targetObj.targetFn() 실행 결과를 리턴한다.

Aop.after = function(fnName, advice, fnObj) {
  Aop.around(fnName,
     function(targetInfo) { // {fn:originalFn, args:arguments}
       var ret = Aop.next(targetInfo);  // targetObj.targetFn() 결과 리턴 
       advice.apply(this, targetInfo.args);   // advice를 실행한다.
       return ret;
     },
     fnObj);
};

targetObj = {
  targetFn: function() {
    console.log("im targetObj tagetFn");
    return "targetFnReturn";
  }
};


function advice () {
  console.log("im advice");
}


// Aop.around('targetFn', advice, targetObj);
// Aop.after('targetFn', advice, targetObj);
Aop.before('targetFn', advice, targetObj);
targetObj.targetFn();

module.exports = Aop;