var MyApp = MyApp || {};
MyApp.Hand = function() {
    this.dataAboutHand = {}; // etc.
};
MyApp.Hand.prototype.arrangeAndMove = function(sign) {
    this.dataAboutHand = '새로운 수화 동작';
};
MyApp.Human = function(handFactory) {
    this.hands = [ handFactory(), handFactory() ];
};
MyApp.Human.prototype.useSignLanguage = function(message) {
    var sign = {};
    // 메시지를 sign에 인코딩한다.
    this.hands.forEach( function(hand) {
        hand.arrangeAndMove(sign);
    });
    console.log(this instanceof MyApp.Human);
    console.log(this instanceof MyApp.Gorilla);
    return '손을 움직여 수화하고 있어. 무슨 말인지 알겠니?';
};
MyApp.Gorilla = function(handFactory) {
    this.hands = [ handFactory(), handFactory() ];
};
MyApp.TeachSignLanguageToKoko = ( function() {
    var handFactory = function() {
        return new MyApp.Hand();
    };
    // (빈자의 의존성 주입: Poor man's dependency injection.)
    var trainer = new MyApp.Human(handFactory);
    var koko = new MyApp.Gorilla(handFactory);
    koko.useSignLanguage = trainer.useSignLanguage;
    // 실행결과 : '손을 움직여 수화하고 있어. 무슨 말인지 알겠니?'
    console.log("koko : " + JSON.stringify(koko));
    console.log(koko.useSignLanguage('안녕!'));
}());