Aop = {
    // 주어진 이름 공간에 매칭되는 모든 함수 주변(around)에 어드바이스 적용 
    around: function(pointcut, advice, namespaces) {
        // 이름 공간이 없으면 전역 이름공간을 찾아내는 꼼수를 쓴다.
        if (namespaces == undefined || namespaces.length == 0) {
            namespaces  = [(function() {return this}).call()]
        }
        // 이름 공간을 전부 순회한다.
        for (var i in namespaces) {
            var ns = namespaces[i]
            for (var member in ns) {
                if (typeof ns[member] == 'function' 
                            && member.match(pointcut)) {
                    (function(fn, fnName, ns){
                        // member fn 슬롯을 'advice' 함수를 호출하는 래퍼로 교체한다.
                        ns[fnName] = function() {
                            return advice.call(this, {fn: fn, fnName: fnName, arguments: arguments})
                        }
                    })(ns[member], member, ns)
                }
            }
        }
    },
    next: function() {
         return f.fn.apply(this, f.arguments)
    }
}

Aop.before = function (pointcut, advice, namespaces) {
    Aop.around(pointcut, 
                function(f) {
                    advice.apply(this, f.arguments)
                    return Aop.next.call(this, f)
                })
}

Aop.after = function (pointcut, advice, namespaces) {
    Aop.around(pointcut,
                function(f){
                    var ret = Aop.next.call(this, f)
                    advice.apply(this, f.arguments)
                    return ret
                },
                namespaces)
}

