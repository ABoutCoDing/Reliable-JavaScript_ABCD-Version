var ape = {
    hasThumbs: true,
    hasTail: true,
    swing: function() {
        return '매달리기';
    }
}

var chimp = Object.create(ape);

var bonobo = Object.create(ape);
bonobo.habitat = '중앙 아프리카';

console.log(bonobo.habitat);
console.log(bonobo.hasTail);
console.log(chimp.swing);

ape.hasThumbs = false;
console.log(chimp.hasThumbs);
console.log(bonobo.hasThumbs);