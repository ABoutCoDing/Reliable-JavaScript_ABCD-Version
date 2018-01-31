// 해당 애플리케이션에서만 사용할 수 있는 모든 객체(모듈)
var MyApp = MyApp || {};
// 애플리케이션 이름 공간에 속한 모듈
// The function depends on another function, animalMaker, which can
// be injected.
MyApp.wildlifePreserveSimulator = function(animalMaker) {
    // Private variables
    var animals = [];
    // Return the API
    return {
        addAnimal: function(species, sex) {
            animals.push(animalMaker.make(species, sex));
        },
        getAnimalCount: function() {
            return animals.length;
        }
    };   
};