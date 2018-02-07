DiContainer = function() {
    // 생성자에 의해 객체가 생성되도록 강제한다.
  if (!(this instanceof DiContainer)) {
    return new DiContainer();
  }

  this.registrations = [];
};

DiContainer.prototype.messages = {
  registerRequiresArgs: '이 생성자 함수는 인자가 3개 있어야 합니다: ' +
    '문자열, 문자열 배열, 함수.'
};

DiContainer.prototype.register = function(name, dependencies, func) {

  var ix;

  if (typeof name !== 'string' ||
     !Array.isArray(dependencies) ||
     typeof func !== 'function') {    // 타입이 함수가 아니라면 
    throw new Error(this.messages.registerRequiresArgs);
  }
  for (ix=0; ix<dependencies.length; ++ix) {
    if (typeof dependencies[ix] !== 'string') {
      throw new Error(this.messages.registerRequiresArgs);
    }
  }

  this.registrations[name] = { dependencies: dependencies, func: func };
};

DiContainer.prototype.get = function(name) {
  var self = this,
      registration = this.registrations[name],
      dependencies = [];
  if (registration === undefined) {
    return undefined;
  }

  registration.dependencies.forEach(function(dependencyName) {  
    var dependency = self.get(dependencyName);
    dependencies.push( dependency === undefined ? undefined : dependency);
  });

  return registration.func.apply(undefined, dependencies);
};


var container = new DiContainer();
var main = 'main',
  mainFunc,
  dep1 = 'dep1',
  dep2 = 'dep2';



container.register(dep1, [], function() {
  return function() {
    return 1;
  };
});

container.register(dep2, [], function() {
  return function() {
    return 2;
  };
});

container.register(main, [dep1, dep2], function(dep1Func, dep2Func) {
  return function() {
    return dep1Func() + dep2Func();
  };
});

mainFunc = container.get(main);
console.log(mainFunc())