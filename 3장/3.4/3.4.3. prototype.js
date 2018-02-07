var primate = {
    stereocopicVision: true
};

var ape = Object.create(primate);
ape.hasThumbs = true;
ape.hasTail = false;
ape.swing = function() {
    return "매달리기";
};

var chimp = Object.create(ape);

console.log(chimp.hasTail);
console.log(chimp.stereocopicVision);