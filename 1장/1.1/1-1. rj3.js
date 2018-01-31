// 다른 전역 변수와 충돌을 피하기 위해 명칭공간을 생성한다.
var rj3 = {};

// svg라는 하위 명칭공간을 만든다.
rj3.svg = {};

// rj3.svg 명칭공간에 line 함수를 넣는다.
rj3.svg.line = function() {
  var getX = function(point) {
    return point[0];
  },
  getY = function(point) {
    return point[1];
  },
  interpolate = function(points) {
    return points.join("L");
  };

  function line(data) {
    var segments = [],
      points = [],
      i = -1,
      n = data.length,
      d;

    function segment() {
      segments.push("M", interpolate(points));
    }

    while (++i < n) {
      d = data[i];
      points.push([+getX.call(this, d, i), +getY.call(this, d, i)]);
    }

    if (points.length) {
      segment();
    }

    return segments.length ? segments.join("") : null;
  }

  line.x = function(funcToGetX) {
    if (!arguments.length) return getX;
    getX = funcToGetX;
    return line;
  };

  line.y = function(funcToGetY) {
    if (!arguments.length) return getY;
    getY = funcToGetY;
    return line;
  };

  return line;
};

// (function() {
//   var arrayData = [
//         [10,130],
//         [100,60],
//         [190,160],
//         [280,10]
//       ],
//       lineGenerator = rj3.svg.line(),
//       path = lineGenerator(arrayData);
//       console.log(path)
// }());

// (function() {
//   var objectData = [
//         { x: 10, y: 130 },
//         { x: 100, y: 60 },
//         { x: 190, y: 160 },
//         { x: 280, y: 10 }
//       ],
//       arrayData = objectData.map(function(d) {
//         return [+d.x, +d.y];
//       }),
//       lineGenerator = rj3.svg.line(),
//       path = lineGenerator(arrayData);

// }());


rj3.svg.samples = {};

rj3.svg.samples.functionBasedLine = function functionBasedLine() {
  var firstXCoord = 10,
    xDistanceBetweenPoints = 50,
    lineGenerator,
    svgHeight = 200; // 맞습니다, 이렇게 하면 안되죠^^

  lineGenerator = rj3.svg.line()
    .x(function(d,i) { return firstXCoord + i * xDistanceBetweenPoints; })
    .y(function(d) { return svgHeight - this.getValue(d); });

  return lineGenerator;
};

(function() {
  var yearlyPriceGrapher = {
    lineGenerator: rj3.svg.samples.functionBasedLine(),

    getValue: function getValue(year) {
      // 마치 웹 서비스처럼 호출합니다!
      return 10 * Math.pow(1.8, year-2010);
    }
  },
  years = [2010, 2011, 2012, 2013, 2014, 2015],
  path = yearlyPriceGrapher.lineGenerator(years);

  // document.getElementById('pathFromFunction').setAttribute('d', path);
}());
