'use strict';

function main() {
    const PI = Math.PI;
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r;
    r = +readLine();
    if(r > 0 && r <= 100){
    // Print the area of the circle:
    console.log(PI*r*r);
    // Print the perimeter of the circle:
    console.log(2*PI*r);
    }
}