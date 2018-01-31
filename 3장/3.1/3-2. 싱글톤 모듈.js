var MyApp = MyApp || {};
MyApp.WildlifePreserveSimulator = (function() {
    var animals = [];
    return {
        addAnimal: function(animalMaker,species, sex) {
            animals.push(animalMaker.make(species,sex));
        },
        getAnimalCount: function() {
            return animals.length;
        }
    };
}()); // <–Immediate execution!