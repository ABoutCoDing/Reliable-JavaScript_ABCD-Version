var MyApp = MyApp || {};
MyApp.wildlifePreserveSimulator = (function() {
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

// MyApp.wildlifePreserveSimulator.addAnimal(realAnimalMaker, gorilla, female);