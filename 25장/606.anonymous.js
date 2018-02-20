var CallbackArrow = CallbackArrow || {};
CallbackArrow.rootFunction = function(){
    CallbackArrow.firstFunction(function(arg){
        // logic in the first callback
        CallbackArrow.secondFunction(function(arg){
            // logic in the second callback
            CallbackArrow.thirdFunction(function(arg){
                // logic in the third callback
                CallbackArrow.fourthFunction(function(arg){
                    // Logic in the fourth callback
                });
            });
        });
    });
};

CallbackArrow.firstFunction = function(callback1){
    callback1(1);
    // callback1(arg);
};
CallbackArrow.secondFunction = function(callback2){
    callback2(2);
    // callback2(arg);
};
CallbackArrow.thirdFunction = function(callback3){
    callback3(3);
    // callback3(arg);
};
CallbackArrow.fourthFunction = function(callback4){
    callback4(4);
    // callback4(arg);
};

CallbackArrow.rootFunction();