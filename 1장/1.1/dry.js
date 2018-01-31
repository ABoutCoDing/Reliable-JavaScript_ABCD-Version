var d;

while(++i < n) {
    d = data[i]
    points.push([+getX.call(this, d, i), +getY.call(this, d, i)])
}


while(++i < n) {
    points.push([+getX.call(this, data[i], i), +getY.call(this, data[i], i)])
}