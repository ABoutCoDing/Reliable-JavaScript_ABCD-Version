function XYPair(x, y) {
    this.x = x
    this.y = y
}

var objectData = [
    new XYPair(10, 130),
    new XYPair(100, 60),
    new XYPair(190, 160),
    new XYPair(200, 10)
]

var something = new XYPair(10, 130)
console.log(something instanceof XYPair)
console.log('x' in something)
console.log(something.hasOwnProperty('x'))