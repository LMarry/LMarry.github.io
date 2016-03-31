var number = prompt("Enter number:", 0);
var degree = prompt("Enter degree:", 0);

console.log( "Your result: ", pow(number, degree) );

function pow(num, deg) {
    var result;

    if (deg == 0) {
        return 1;
    }
    
    if (deg < 0) {
        num = 1 / num;
        deg *= -1;
    }
    
    result = num;
    
    for (var i = 1; i < deg; i++) {
        result *= num;
    }
    
    return result;
}
