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

   describe('Aop.next(context, targetInfo)', function() {
    var advice = function(targetInfo) {
      return Aop.next.call(this, targetInfo);
    };
    
    var originalFn;
    
    beforeEach(function() {
      originalFn = targetObj.targetFn;
      Aop.around('targetFn', advice, targetObj);
    });
    
    
    
    it("targetInfo 함수에서 받은 값을 반환한다", function() {
      var ret = targetObj.targetFn();
      expect(ret).toEqual(targetFnReturn);
    });

    it('주어진 콘텍스트에서 타깃 함수를 실행한다', function() {
      var targetInstance = new Target();
      var spyOnInstance = spyOn(targetInstance, 'targetFn').and.callThrough();
      Aop.around('targetFn', advice, targetInstance);
      targetInstance.targetFn();
      expect(spyOnInstance).toHaveBeenCalled();
    });
  });
});