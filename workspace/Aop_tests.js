var Aop = require('./Aop.js');

describe('Aop', function() {
  var targetObj,
      targetFnReturn = 123,
      executionPoints,  // 실행 이벤트가 담긴 배열
      argPassingAdvice, // 타깃에 인자를 전달할 어드바이스
      argsToTarget;     // targetObj.targetFn에 전달할 인자들

      Target = function() {
        var self = this;
        this.targetFn = function() {
          expect(this).toBe(self);
        };
      };

  beforeEach(function() {
    targetObj = {
      targetFn: function() {
        executionPoints.push('targetFn');
        argsToTarget = Array.prototype.slice.call(arguments, 0);
        return targetFnReturn;
      }
    };

    executionPoints = [];

    argPassingAdvice = function(targetInfo) {
      return targetInfo.fn.apply(this, targetInfo.args);
    };

    argsToTarget = [];
  });

  

  describe('Aop.after(fnName, advice, targetObj)', function () {

    describe('타깃이 성공할 경우', function() {
      // it('타깃 직후에 실행한다', function() {
      //   var advice = function() {
      //      executionPoints.push('advice');
      //   };
      //   Aop.after('targetFn', advice, targetObj);
      //   targetObj.targetFn();
      //   expect(executionPoints).toEqual(['targetFn', 'advice']);
      // });
      it("타깃의 인자로 실행한다", function() {
        var argsToAdvice;
        var advice = function() {
          argsToAdvice = Array.prototype.slice.call(arguments, 0);
        };
        Aop.after('targetFn', advice, targetObj);
        targetObj.targetFn(11, 22, 33);
        expect(argsToAdvice).toEqual([11, 22, 33]);
      });
      // it('타깃의 콘텍스트로 실행한다', function() {
      //   var advice = function() {
      //     expect(this).toBe(targetObj);
      //   };
      //   Aop.after('targetFn', advice, targetObj);
      //   targetObj.targetFn();
      // });
      // it('타깃의 반환값을 반환한다', function() {
      //   Aop.after('targetFn', function(){}, targetObj);
      //   expect(targetObj.targetFn()).toEqual(targetFnReturn);
      // });
      // it('최초의 어드바이스가 제일 먼저 실행되는 식으로 체이닝이 가능한다', function() {
      //   var adviceFactory = function(adviceID) {
      //     return (function() {
      //       executionPoints.push(adviceID);
      //     });
      //   };
      //   Aop.after('targetFn', adviceFactory('first'), targetObj);
      //   Aop.after('targetFn', adviceFactory('second'), targetObj);
      //   targetObj.targetFn();
      //   expect(executionPoints).toEqual(['targetFn', 'first', 'second']);
      // });
    });


  });
});