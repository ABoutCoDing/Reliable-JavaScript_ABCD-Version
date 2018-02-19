describe('returnValueCache', function() {
  "use strict";

  var testObject,
      testValue,
      args,
      spyReference;

  // 테스트 객체를 생성하는 도우미 함수. testFunction에 스파이를 심고
  // 반환 객체의 spyReference 프로퍼티에 스파이 참조값을 담아둔다
  function createATestObject() {
    var obj = {
      testFunction : function(arg) {
        return testValue;
      }
    };
    spyOn(obj, 'testFunction').and.callThrough();

    // 애스팩트가 적용된 이후에는
    // 스파이를 직접 참조할 수 없으므로 현재 참조값을 보관해둔다
    obj.spyReference = obj.testFunction;

    return obj;
  }

  beforeEach(function() {
    testObject = createATestObject();
    testValue = {};
    // testObject.testFunction를 returnValueCache 애스팩트로 장식한다
    Aop.around('testFunction', Aspects.returnValueCache().advice, testObject);

    args = [{key:"value"}, "someValue"];
  });

  describe('advice(targetInfo)', function() {
    

    it('주입된 캐시를 인스턴스 간에 공유할 수 있다', function() {
      var sharedCache = {},
          object1 = createATestObject(),
          object2 = createATestObject();

      Aop.around('testFunction',
        new Aspects.returnValueCache(sharedCache).advice,
        object1);

      Aop.around('testFunction',
        new Aspects.returnValueCache(sharedCache).advice,
        object2);

      object1.testFunction(args); // 캐시 생성 

      // object2의 testFunction 호출 시
      //  캐시된 object1의 testFunction 호출 결과를 가져온다
      expect(object2.testFunction(args)).toBe(testValue);

      // 따라서, object2의 testFunction은 실행되지 않는다
      expect(object2.spyReference.calls.count()).toBe(0);
    });
  });
});