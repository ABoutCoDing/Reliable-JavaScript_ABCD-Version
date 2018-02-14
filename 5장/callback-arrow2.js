var CallbackArrow = CallbackArrow || {};
CallbackArrow.rootFunction = function(){
    CallbackArrow.firstFunction(CallbackArrow.firstCallback);
};
CallbackArrow.firstFunction = function(callback1){
    callback1(arg);
};
CallbackArrow.secondFunction = function(callback2){
    callback2(arg);
};
CallbackArrow.thirdFunction = function(callback3){
    callback3(arg);
};
CallbackArrow.fourthFunction = function(callback4){
    callback4(arg);
};

CallbackArrow.firstCallback = function(){
    // logic in the first callback
    CallbackArrow.secondFunction(CallbackArrow.secondCallback);
};
CallbackArrow.secondCallback = function(){
    // logic in the second callback
    CallbackArrow.thirdFunction(CallbackArrow.thirdCallback);
};
CallbackArrow.thirdCallback = function(){
    // logic in the third callback
    CallBackArrow.fourthFunction(CallbackArrow.fourthCallback);
};
CallbackArrow.fourthCallback = function(){
    // logic in the fourth callback
};