// Dependency Inversion Principle 

d3.svg.line = function () {
    return d3_svg_line(d3_identity)
}

function d3_svg_line(projection) {
    
    function line(Data) {

        function segment() {
            segments.push("M", interpolate(projection(points), tension));
        }
    }
}